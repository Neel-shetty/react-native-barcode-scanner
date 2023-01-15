import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { colors } from "../../constants/colors";
import { useDispatch } from "react-redux";
import { setError } from "../../store/slice/formErrorSlice";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { setAdhaarFront, setLoggedIn } from "../../store/slice/userSlice";
import * as SecureStore from "expo-secure-store";
import Input from "./Input";
import CustomButton from "../SignInScreen2Components/common/CustomButton";
import UploadButton from "./UploadButton";

const InputFields = () => {
  const [loading, setLoading] = useState(false);
  const [uploadFiles, setUploadFiles] = useState(false);
  const [fromData, setFormData] = useState({});
  const [image, setImage] = useState(null);

  console.log("🚀 ~ file: InputFields.js:26 ~ InputFields ~ loading", loading);
  const formScheme = yup.object({
    name: yup.string().required("error"),
    phoneNumber: yup.string().length(10, "error").required("error"),
    phoneNumber2: yup.string().length(10, "error"),
    email: yup.string().email("error").required("error"),
    address: yup.string().required("error"),
  });

  const dispatch = useDispatch();
  const navigation = useNavigation();

  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

  function Login(values) {
    setLoading(true);
    axios
      .post("http://codelumina.com/project/scanme/api/user/login", {
        phone: values.phoneNumber,
        password: values.password,
      })
      .then(async (res) => {
        res.data;
        console.log(res.data.message);
        console.log(res, "if error-----------");
        dispatch(setLoggedIn(true));
        save("isLoggedIn", "true");
        save("token", JSON.stringify(res.data.data.token));
        save("id", JSON.stringify(res.data.data.id));
        navigation.navigate("BottomTab", { screen: "HomeScreen" });
      })
      .catch((error) => {
        // console.log(e.toJSON());
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          Alert.alert(
            "SignIn failed",
            JSON.stringify(error.response.data.message)
          );
          // console.log(error.response.status);
          // console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log("error request", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log("error config", error.config);
      });
    setLoading(false);
  }

  return (
    <View style={styles.root}>
      <Formik
        initialValues={{
          name: "",
          phone: "",
          phone2: "",
          email: "",
          address: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          Login(values);
          setFormData(values);
          // pickImage()
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
              {!uploadFiles ? (
                <>
                  <Input
                    placeholder={"Name"}
                    onChangeText={handleChange("name")}
                    handleBlur={handleBlur("name")}
                    value={values.name}
                    fieldType={"name"}
                    error={errors}
                  />
                  <Input
                    placeholder={"Phone Number"}
                    onChangeText={handleChange("phone")}
                    handleBlur={handleBlur("phone")}
                    value={values.phone}
                    fieldType={"phone"}
                    error={errors}
                  />
                  <Input
                    placeholder={"Phone Number 2"}
                    onChangeText={handleChange("phone2")}
                    handleBlur={handleBlur("phone2")}
                    value={values.phone2}
                    fieldType={"phone"}
                    error={errors}
                  />
                  <Input
                    placeholder={"Email"}
                    onChangeText={handleChange("email")}
                    handleBlur={handleBlur("email")}
                    value={values.email}
                    fieldType={"email"}
                    error={errors}
                  />
                  <Input
                    placeholder={"Address"}
                    onChangeText={handleChange("address")}
                    handleBlur={handleBlur("address")}
                    value={values.address}
                    fieldType={"address"}
                    error={errors}
                  />
                  <UploadButton
                    // onPress={pickImage}
                    title={"Adhaar Card Front"}
                    type={"adhaarFront"}
                  />
                  <UploadButton
                    // onPress={pickImage}
                    title={"Adhaar Card Back"}
                    type={"adhaarBack"}
                  />
                  <UploadButton
                    //  onPress={pickImage}
                    title={"Pan Card"}
                    type={"panCard"}
                  />
                </>
              ) : (
                <>
                  <UploadButton
                    // onPress={pickImage}
                    title={"Adhaar Card Front"}
                  />
                </>
              )}
            </View>
            <View style={styles.buttonContainer}>
              <CustomButton title={"Next"} onPress={handleSubmit} />
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
    flex: 1,
  },
  forgotText: {
    fontFamily: "poppins-medium",
    color: "white",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    // backgroundColor: "violet",
  },
  root: {
    flex: 1,
    // backgroundColor: "coral",
  },
  inputContainer: {
    flex: 8,
    // backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
