import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import Input from "../Input";
import { Formik } from "formik";
import * as yup from "yup";
import { colors } from "../../constants/colors";
import CustomButton from "../CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "../../store/slice/formErrorSlice";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const InputFields = () => {
  const formScheme = yup.object({
    email: yup.string().email("error").required("error"),
    password: yup.string().min(8, "error").required("error"),
    name: yup.string().required("error"),
    phoneNumber: yup.string().length(10, "error").required("error"),
  });

  const dispatch = useDispatch();
  const navigation = useNavigation();


  function ForgotPasswordButton() {
    navigation.navigate("");
  }

  // useEffect(() => {}, [data]);

  return (
    <View style={styles.root}>
      <Formik
        initialValues={{ email: "", password: "", name: "", phoneNumber: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
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
              placeholder={"Name"}
              title={"Your Name"}
              onChangeText={handleChange("name")}
              handleBlur={handleBlur("name")}
              value={values.name}
              fieldType={"name"}
            />
            <Input
              placeholder={"Phone Number"}
              title={"Your Phone Number"}
              onChangeText={handleChange("phoneNumber")}
              handleBlur={handleBlur("phoneNumber")}
              value={values.phoneNumber}
              fieldType={"phoneNumber"}
              error={errors}
            />
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
            <View style={{ paddingTop: 40 }}>
              <CustomButton title={"Sign Up"} onPress={handleSubmit} />
            </View>
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
    height: 50,
    justifyContent: "center",
  },
  forgotText: {
    fontFamily: "inter-regular",
    fontSize: 16,
    color: colors.black,
  },
});