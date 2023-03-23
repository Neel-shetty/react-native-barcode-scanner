import {
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import { useState } from "react";
import Input from "./Input";
import CustomButton from "../SignInScreen2Components/common/CustomButton";
import axios from "axios";
import { BASEURL } from "../../constants/apiurl";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import { useEffect } from "react";

const InputFields = () => {
  const [loading, setLoading] = useState(false);
  const route = useRoute();
  const navigation = useNavigation();
  const [profile, setProfile] = useState();
  async function getProfile() {
    setLoading(true);
    const id = await SecureStore.getItemAsync("id");
    axios
      .post(`${BASEURL}/user/profile`, {
        userid: id,
      })
      .then((res) => {
        console.log("res", res.data);
        setProfile(res.data.data);
      })
      .catch((error) => {
        console.log("error response -- ", error);
      })
      .finally(() => setLoading(false));
  }
  // call getProfile function in useEffect
  useEffect(() => {
    getProfile();
  }, []);
  if (!profile) return null;
  return (
    <View>
      <Formik
        initialValues={{
          name: profile.name,
          email: profile.email,
          phoneNumber: profile.phone,
        }}
        onSubmit={async (values) => {
          console.log(values);
          setLoading(true);
          const id = await SecureStore.getItemAsync("id");
          axios
            .post(`${BASEURL}/user/profile/update`, {
              name: values.name,
              email: values.email,
              phone: values.phoneNumber,
              user_id: id,
            })
            .then((res) => {
              Alert.alert("Success", res.data?.message);
              navigation.navigate("BottomTab");
            })
            .catch((error) => {
              console.log("error response -- ", error);
              Alert.alert("Error", error.response?.data?.message);
            })
            .finally(() => setLoading(false));
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
            <View style={styles.buttonContainer}>
              <CustomButton
                title={"Update"}
                onPress={handleSubmit}
                loading={loading}
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
