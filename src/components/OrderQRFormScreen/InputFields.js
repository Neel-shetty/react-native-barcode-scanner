import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Formik } from "formik";
import { useState } from "react";
import Input from "./Input";
import CustomButton from "../SignInScreen2Components/common/CustomButton";
import RazorpayCheckout from "react-native-razorpay";
import axios from "axios";
import { BASEURL } from "../../constants/apiurl";
import { useRoute } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";

const InputFields = () => {
  const [loading, setLoading] = useState(false);
  const route = useRoute();
  // console.log(
  //   "🚀 ~ file: InputFields.js:15 ~ InputFields ~ route:",
  //   route.params?.orderId
  // );
  return (
    <View>
      <Formik
        initialValues={{ phoneNumber: "", address: "", name: "", email: "" }}
        onSubmit={(values) => {
          console.log(values);
          axios
            .post(`${BASEURL}/create/order/id`, {
              amount: route.params?.amount,
            })
            .then((res) => {
              let options = {
                description: "Credits towards consultation",
                image: "https://i.imgur.com/3g7nmJC.jpg",
                currency: "INR",
                key: "rzp_test_RFqjBfnOlEqSwr",
                amount: route.params?.amount,
                name: "Scan Me",
                order_id: res.data.data, //Replace this with an order_id created using Orders API.
                // prefill: {
                //   email: "gaurav.kumar@example.com",
                //   contact: "9191919191",
                //   name: "Gaurav Kumar",
                // },
                theme: { color: "pink" },
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
                        .post(`${BASEURL}/order/insert`, {
                          user_id: id,
                          payment_id: data.razorpay_payment_id,
                          order_id: route.params?.orderId,
                          name: values.name,
                          address: values.address,
                          email: values.email,
                          phone: values.phoneNumber,
                        })
                        .then((result) => {
                          console.log(
                            "order insert response --- ",
                            result.data
                          );
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
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors = false,
        }) => (
          <View style={styles.formikConatiner}>
            <View style={styles.inputContainer}>
              {/* <KeyboardAvoidingView> */}
              <Input
                placeholder={"Delivery Address"}
                title={"Delivery Address"}
                onChangeText={handleChange("address")}
                handleBlur={handleBlur("address")}
                value={values.address}
                fieldType={"address"}
                error={errors}
              />
              <Input
                placeholder={"Phone Number"}
                title={"Phone Number"}
                onChangeText={handleChange("phoneNumber")}
                handleBlur={handleBlur("phoneNumber")}
                value={values.phoneNumber}
                fieldType={"phoneNumber"}
                // secureTextEntry={true}
                errpr={errors}
              />
              <Input
                placeholder={"Name"}
                title={"Name"}
                onChangeText={handleChange("name")}
                handleBlur={handleBlur("name")}
                value={values.name}
                fieldType={"name"}
                // secureTextEntry={true}
                errpr={errors}
              />
              <Input
                placeholder={"Email"}
                title={"Email"}
                onChangeText={handleChange("email")}
                handleBlur={handleBlur("email")}
                value={values.email}
                fieldType={"password"}
                // secureTextEntry={true}
                errpr={errors}
              />
              {/* </KeyboardAvoidingView> */}
            </View>
            {/* <CustomButton
              title={loading ? "Loading.." : "Sign In"}
              onPress={handleSubmit}
            /> */}
            <View style={styles.buttonContainer}>
              <CustomButton
                title={"Place Order"}
                onPress={handleSubmit}
                // loading={loading}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default InputFields;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    // backgroundColor: "violet",
  },
});
