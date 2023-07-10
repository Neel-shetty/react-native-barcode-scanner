import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { colors } from "../../constants/colors";
import { useDispatch } from "react-redux";
import { setError } from "../../store/slice/formErrorSlice";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { setLoggedIn } from "../../store/slice/userSlice";
import * as SecureStore from "expo-secure-store";
import Input from "./common/Input";
import CustomButton from "./common/CustomButton";

const InputFields = () => {
  const [loading, setLoading] = useState(false);

  const formScheme = yup.object({
    email: yup.string().email("error").required("error"),
    password: yup.string().min(8, "error").required("error"),
    name: yup.string().required("error"),
    phoneNumber: yup.string().length(10, "error").required("error"),
  });

  const dispatch = useDispatch();
  const navigation = useNavigation();

  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

  function SignUp(values) {
    setLoading(true);
    axios
      .post("https://skanme.in/user/register", {
        phone: values.phoneNumber,
        password: values.password,
        name: values.name,
        email: values.email,
      })
      .then((res) => {
        res.data;
        console.log(res.data);
        save("isLoggedIn", "true");
        save("token", JSON.stringify(res.data.data.token));
        save("id", JSON.stringify(res.data.data.id));
        dispatch(setLoggedIn(true));
        navigation.navigate("BottomTab", { screen: "HomeScreen" });
      })
      .catch((error) => {
        // console.log(e.toJSON());
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          Alert.alert(
            "SignUp failed",
            JSON.stringify(error.response.data.message)
          );
          // console.log(error.response.status);
          // console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
    setLoading(false);
  }

  return (
    <View style={styles.root}>
      <Formik
        initialValues={{ email: "", password: "", name: "", phoneNumber: "" }}
        onSubmit={(values) => {
          console.log(values);
          SignUp(values);
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
          <View style={styles.formikConatiner}>
            {useEffect(() => {
              dispatch(setError(errors));
            }, [errors])}
            <View style={styles.inputContainer}>
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
            </View>
            {/* <View style={styles.forgotPasswordContainer}>
              <TouchableOpacity onPress={ForgotPasswordButton}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View> */}
            {/* <CustomButton
              title={loading ? "Loading.." : "Sign In"}
              onPress={handleSubmit}
            /> */}
            <View style={styles.buttonContainer}>
              <CustomButton title={"Register"} onPress={handleSubmit} />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default InputFields;

const styles = StyleSheet.create({
  formikConatiner: {
    flex: 1,
    // backgroundColor: "pink",
  },
  forgotPasswordContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    // flex: 1,
  },
  forgotText: {
    fontFamily: "poppins-medium",
    color: "white",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 3,
    // backgroundColor: "violet",
  },
  root: {
    flex: 1,
    // backgroundColor: "coral",
  },
  inputContainer: {
    flex: 5,
    // backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});
