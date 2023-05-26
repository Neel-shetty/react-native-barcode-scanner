import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { layout } from "../../constants/layout";
import Input from "./Input";
import { Formik } from "formik";
import CustomButton from "../SignInScreen2Components/common/CustomButton";
import axios from "axios";
import { BASEURL } from "../../constants/apiurl";
import { Alert } from "react-native";
import RazorpayCheckout, { CheckoutOptions } from "react-native-razorpay";

const Checkout = () => {
  const [discount, setDiscount] = useState(0);
  const [discountApplied, setDiscountApplied] = useState(false);
  console.log("🚀 ~ file: Checkout.js:13 ~ Checkout ~ discount:", discount);
  const route = useRoute();
  const [price, setPrice] = useState(route.params.plan.amount);
  console.log("🚀 ~ file: Checkout.js:15 ~ Checkout ~ price:", price);
  const plan = route.params.plan;
  const naivagation = useNavigation();

  async function sendCoupon(coupon) {
    if (discountApplied) return;
    if (coupon === "") return;
    axios
      .post(`${BASEURL}/apply-coupon`, { code: coupon })
      .then((res) => {
        console.log("coupon response --- ", res.data);
        setDiscount(res.data?.discount);
        updatePrice(res.data?.discount);
      })
      .catch((err) => {
        console.log("coupon error --- ", err?.response?.data.message);
        if (err?.response?.data) {
          Alert.alert("Error", err?.response?.data?.message);
        }
      });
  }

  function updatePrice(discount) {
    setPrice((prevPrice) => {
      console.log(
        "🚀 ~ file: Checkout.js:34 ~ setPrice ~ prevPrice:",
        prevPrice
      );
      const dis = Number(prevPrice) * (Number(discount) / 100);
      console.log("🚀 ~ file: Checkout.js:35 ~ updatePrice ~ discount:", dis);
      return prevPrice - dis;
    });
    setDiscountApplied(true);
  }

  function clearDiscount() {
    setDiscount(0);
    setPrice(route.params.plan.amount);
    setDiscountApplied(false);
  }

  async function placeOrder() {
    axios
      .post(`${BASEURL}/create/order/id`, {
        amount: price,
      })
      .then((res) => {
        console.log("🚀 ~ file: Checkout.js:66 ~ .then ~ res:", res.data.data);
        let options: CheckoutOptions = {
          description: "Subscription",
          image: "https://i.imgur.com/3g7nmJC.jpg",
          currency: "INR",
          key: "rzp_live_DuYBNnUQGI2bMj",
          amount: 100,
          name: "Scan Me",
          order_id: res.data.data, //Replace this with an order_id created using Orders API.
          // theme: { color: "pink" },
          prefill: {
            name: "Rajat",
            email: "test@test.com",
            contact: "9999999999",
          },
        };
        RazorpayCheckout.open(options)
          .then((data) => {
            // handle success
            alert(`Success: ${data.razorpay_payment_id}`);
            axios
              .post(`${BASEURL}/payment/details`, {
                razorpay_payment_id: data.razorpay_payment_id,
                razorpay_order_id: res.data.data,
                razorpay_signature: data.razorpay_signature,
              })
              .then(async (response) => {
                const id = await SecureStore.getItemAsync("id");
                axios
                  .post(`${BASEURL}/buy-user-subscription`, {
                    user_id: id,
                    transaction_id: data.razorpay_payment_id,
                    subscription_id: route.params?.plan.id,
                    amount: price,
                    discount: discount,
                    plan_name: route.params?.plan.plan_name,
                    limit: route.params?.plan.register_limit,
                  })
                  .then((result) => {
                    console.log("order insert response --- ", result.data);
                    naivagation.navigate("SubscriptionScreen");
                  })
                  .catch((sendCartError) =>
                    console.log(
                      "order insert error --- ",
                      sendCartError.response.data
                    )
                  );
              })
              .catch((err) => console.log(err));
          })
          .catch((error) => {
            // handle failure
            alert(`Error: ${error.code} | ${error.description}`);
          });
      })
      .catch((error) => console.log(error.response));
  }

  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Plan Details</Text>
        <Text style={styles.infoText}>Name - {plan.plan_name}</Text>
        <Text style={styles.infoText}>Description - {plan.description}</Text>
        <Text style={styles.infoText}>Plan type - {plan.plan_type}</Text>
        <Text style={styles.infoText}>
          Register Limit - {plan.register_limit}
        </Text>
        {/* <Text style={styles.infoText}>Price - {plan.price}</Text> */}
        <View style={{ height: 20 }} />
        <Text style={styles.title}>Payment Details</Text>
        <Text style={styles.infoText}>Price - {price}</Text>
        {discount !== 0 ? (
          <Text style={styles.infoText}>Discount - {discount}%</Text>
        ) : null}
        <Formik
          initialValues={{ coupon: "" }}
          onSubmit={(values) => {
            sendCoupon(values.coupon);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <Input
                placeholder="Enter coupon code"
                onChangeText={handleChange("coupon")}
                onBlur={handleBlur("coupon")}
                value={values.coupon}
                name="coupon"
                onPressClose={clearDiscount}
              />
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <CustomButton onPress={handleSubmit} title={"Apply"} />
              </View>
            </View>
          )}
        </Formik>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
          // marginTop: layout.height * 0.1,
        }}
      >
        <CustomButton title="Pay" onPress={placeOrder} />
      </View>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  root: {
    width: layout.widthp,
    flex: 1,
    justifyContent: "space-between",
    // backgroundColor: "pink",
  },
  titleContainer: {},
  title: {
    fontSize: 14,
    fontFamily: "poppins-medium",
    color: "white",
  },
  infoText: {
    fontSize: 12,
    fontFamily: "poppins-medium",
    color: "white",
  },
});
