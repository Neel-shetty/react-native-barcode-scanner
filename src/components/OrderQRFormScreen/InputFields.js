import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Formik } from "formik";
import { useState } from "react";
import Input from "./Input";
import CustomButton from "../SignInScreen2Components/common/CustomButton";

const InputFields = () => {
  const [loading, setLoading] = useState(false);
  return (
    <View>
      <Formik
        initialValues={{ phoneNumber: "", address: "", name: "", email: "" }}
        onSubmit={(values) => {
          console.log(values);
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
                onChangeText={handleChange("password")}
                handleBlur={handleBlur("password")}
                value={values.password}
                fieldType={"password"}
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
