import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { colors } from "../../constants/colors";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "../../store/slice/formErrorSlice";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import {
  setAdhaarFront,
  setFormSubmitted,
  setLoggedIn,
} from "../../store/slice/userSlice";
import * as SecureStore from "expo-secure-store";
import Input from "./Input";
import CustomButton from "../SignInScreen2Components/common/CustomButton";
import UploadButton from "../KycScreenComponents/UploadButton";
import InputView from "./InputView";
// import FormData from "form-data";
import Checkbox from "expo-checkbox";
import { layout } from "../../constants/layout";
import TermsAndConditions from "../TermsAndConditions";

const InputFields = () => {
  const [loading, setLoading] = useState(false);
  const [uploadFiles, setUploadFiles] = useState(false);
  const [fromData, setFormData] = useState({});
  const [image, setImage] = useState(null);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [terms, setTerms] = useState(false);

  console.log("🚀 ~ file: InputFields.js:26 ~ InputFields ~ loading", loading);
  const formScheme = yup.object({
    name: yup.string().required("error"),
    // phone: yup.string().length(10, "error").required("error"),
    phone2: yup.string().length(10, "error").notRequired(),
    // email: yup.string().email("error").required("error"),
    address: yup.string().required("error"),
  });

  const dispatch = useDispatch();
  const navigation = useNavigation();

  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }
  const af = useSelector((state) => state.user.adhaarFront);
  const ab = useSelector((state) => state.user.adhaarBack);
  const pc = useSelector((state) => state.user.panCard);

  async function getValuefor(key) {
    let result = await SecureStore.getItemAsync(key);
    // console.log(result);
    return result;
  }

  async function getDetails() {
    let id = await getValuefor("id");
    console.log("🚀 ~ file: InputFields.js:53 ~ getDetails ~ id", id);
    let token = await getValuefor("token");
    token = token.replace(/^"(.+(?="$))"$/, "$1");
    console.log("🚀 ~ file: InputFields.js:55 ~ getDetails ~ token", token);
    axios
      .post("http://codelumina.com/project/scanme/api/user/profile", {
        userid: id,
        token: token,
      })
      .then((res) => {
        // console.log(res.data.data.email);
        setPhone(res.data.data.phone);
        setEmail(res.data.data.email);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log(error.message);
        }
      });
  }

  async function sendKyc(values) {
    setLoading(true);
    let id = await getValuefor("id");
    // id = JSON.stringify(id);

    let filename1 = af.uri.split("/").pop();
    let filename2 = ab.uri.split("/").pop();
    let filename3 = pc.uri.split("/").pop();

    // Infer the type of the image
    let match1 = /\.(\w+)$/.exec(filename1);
    let type1 = match1 ? `image/${match1[1]}` : `image`;
    let match2 = /\.(\w+)$/.exec(filename2);
    let type2 = match2 ? `image/${match2[1]}` : `image`;
    let match3 = /\.(\w+)$/.exec(filename3);
    let type3 = match3 ? `image/${match3[1]}` : `image`;

    let formData = new FormData();
    formData.append("phone", phone);
    formData.append("phone2", values.phone2);
    formData.append("email", email);
    formData.append("name", values.name);
    formData.append("address", values.address);
    formData.append("adhar_front", {
      uri: af.uri,
      name: filename1,
      type: type1,
    });
    formData.append("adhar_back", {
      uri: ab.uri,
      name: filename2,
      type: type2,
    });
    formData.append("pancard", { uri: pc.uri, name: filename3, type: type3 });
    formData.append("userid", id);
    console.log("🚀 ~ file: InputFields.js:47 ~ sendKyc ~ formData", formData);
    axios
      .post(
        "http://codelumina.com/project/scanme/api/user/kyc/insert",
        formData,
        {
          headers: {
            // accept: "application/json",
            accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(async (res) => {
        res.data;
        console.log(res.data);
        setLoading(false);
        Alert.alert("KYC information submitted", res.data.message);
        dispatch(setFormSubmitted(true));
        navigation.navigate("WaitScreen");
      })
      .catch((error) => {
        // console.log(e.toJSON());
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          if (error.response.data.message === "Form Already Submitted") {
            save("formSubmitted", "true");
            dispatch(setFormSubmitted(true));
            navigation.navigate("WaitScreen");
          }
          Alert.alert(
            "KYC submission failed",
            JSON.stringify(error.response.data.message)
          );
          setLoading(false);
          // console.log(error.response.status);
          // console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log("error request", error.request);
          setLoading(false);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
          setLoading(false);
        }
        // setLoading(false);
        console.log("error config", error.config);
      });
  }

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <View style={styles.root}>
      <Formik
        initialValues={{
          name: "",
          phone: phone,
          phone2: "",
          email: email,
          address: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          sendKyc(values);
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
                  <InputView title={phone} />
                  <Input
                    placeholder={"Phone Number 2 (optional)"}
                    onChangeText={handleChange("phone2")}
                    handleBlur={handleBlur("phone2")}
                    value={values.phone2}
                    fieldType={"phone"}
                    error={errors}
                  />
                  <InputView title={email} />
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
              <TermsAndConditions
                screen={"KycScreen"}
                terms={terms}
                setTerms={setTerms}
              />
              <CustomButton
                title={loading ? "Loading..." : "Next"}
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
