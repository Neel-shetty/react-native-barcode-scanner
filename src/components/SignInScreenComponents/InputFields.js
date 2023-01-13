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
import { useQuery } from "react-query";
import axios from "axios";

const InputFields = () => {
  const formScheme = yup.object({
    // phoneNumber: yup.string().phoneNumber("error").required("error"),
    password: yup.string().min(8, "error").required("error"),
    phoneNumber: yup.string().length(10, "error").required("error"),
  });

  const dispatch = useDispatch();
  const navigation = useNavigation();

  function ForgotPasswordButton() {
    navigation.navigate("");
  }

  function Login(values) {
    console.log("🚀 ~ file: InputFields.js:29 ~ Login ~ values", {
      values,
    });
    // const { isLoading, error, data } = useQuery("login", () => {
    try {
      axios
        .post("https://codelumina.com/project/scanme/api/user/login", {
          phone: values.phoneNumber,
          password: values.password,
        })
        .then((res) => {
          // res.json();
          res.data
          console.log(res.data.message);
          dispatch(setLoggedIn(true))
        });
    } catch (e) {
      console.log("🚀 ~ file: InputFields.js:38 ~ Login ~ e", e);
    }
    // });
    // console.log("🚀 ~ file: InputFields.js:26 ~ Login ~ data", data);
  }

  return (
    <View style={styles.root}>
      <Formik
        initialValues={{ phoneNumber: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
          Login(values);
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
              placeholder={"Phone Number"}
              title={"Your Phone Number"}
              onChangeText={handleChange("phoneNumber")}
              handleBlur={handleBlur("phoneNumber")}
              value={values.phoneNumber}
              fieldType={"phoneNumber"}
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
              <TouchableOpacity onPress={ForgotPasswordButton}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
              </TouchableOpacity>
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
    height: 50,
    justifyContent: "center",
  },
  forgotText: {
    fontFamily: "inter-regular",
    fontSize: 16,
    color: colors.black,
  },
});
