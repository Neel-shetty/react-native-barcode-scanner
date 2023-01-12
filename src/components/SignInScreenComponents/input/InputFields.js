import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Input from "./Input";
import { Formik } from "formik";
import * as yup from "yup";
import { colors } from "../../../constants/colors";
import CustomButton from "../../CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "../../../store/slice/formErrorSlice";

const InputFields = () => {
  const formScheme = yup.object({
    email: yup.string().email("error").required("error"),
    password: yup.string().min(8, "error").required("error"),
  });
  // const setError = useSelector((state)=>{state.error.error})
  const count = useSelector((state) => state.error.error);
  console.log("🚀 ~ file: InputFields.js:17 ~ InputFields ~ setError", count);
  const dispatch = useDispatch();

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
          errors = false,
        }) => (
          <View>
            {useEffect(() => {
              dispatch(setError(errors));
            }, [errors])}
            <Input
              placeholder={"Email/Username"}
              title={"Your Email/Username"}
              onChangeText={handleChange("email")}
              handleBlur={handleBlur("email")}
              value={values.email}
              fieldType={"email"}
              error={errors}
            />
            <Input
              placeholder={"Password"}
              title={"Your Password"}
              onChangeText={handleChange("password")}
              handleBlur={handleBlur("password")}
              value={values.password}
              fieldType={"password"}
              secureTextEntry={true}
              errpr={errors}
            />
            <View style={styles.forgotPasswordContainer}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </View>
            <CustomButton title={"Sign In"} onPress={handleSubmit} />
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
