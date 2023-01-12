import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "./Input";
import { Formik } from "formik";
import * as yup from "yup";
import { colors } from "../../../constants/colors";
import CustomButton from "../../CustomButton";

const InputFields = () => {
  const formScheme = yup.object({
    email: yup.string().email("Invalid email address").required("Required!"),
    password: yup.string().min(8, "Password too short").required("Required!"),
  });
  return (
    <View style={styles.root}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={formScheme}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <View>
            <Input
              placeholder={"Email/Username"}
              title={"Your Email/Username"}
              onChangeText={handleChange("email")}
              handleBlur={handleBlur("email")}
              value={values.email}
              fieldType={"email"}
            />
            {/* <Text>{touched.email && errors.email}</Text> */}
            <Input
              placeholder={"Password"}
              title={"Your Password"}
              onChangeText={handleChange("password")}
              handleBlur={handleBlur("password")}
              value={values.password}
              fieldType={"password"}
              secureTextEntry={true}
            />
            <View style={styles.forgotPasswordContainer}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </View>
            <CustomButton title={'Sign In'} onPress={handleSubmit}/>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default InputFields;

const styles = StyleSheet.create({
  root: {},
  forgotPasswordContainer: {
    alignItems: "flex-end",
    paddingRight: 15,
  },
  forgotText: {
    fontFamily: "inter-regular",
    fontSize: 16,
    color: colors.black,
  },
});
