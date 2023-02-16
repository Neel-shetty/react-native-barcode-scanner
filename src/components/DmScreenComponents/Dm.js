import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import CustomInput from "./CustomInput";
import TextBox from "./TextBox";
import { layout } from "../../constants/layout";
import { useState } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { BASEURL } from "../../constants/apiurl";
import { Formik } from "formik";

const data = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    type: "sender",
  },
  {
    text: "sed do eiusmod tempor incididunt",
    type: "receiver",
  },
  {
    text: 3,
    type: "sender",
  },
  {
    text: "eiusmod tempor incididunt",
    type: "receiver",
  },
  {
    text: "quis nostrud exercitation ullamco laboris nisi ut aliquip",
    type: "sender",
  },
  {
    text: 6,
    type: "sender",
  },
  {
    text: 4,
    type: "receiver",
  },
  {
    text: 4,
    type: "receiver",
  },
];

const Dm = () => {
  const [messages, setMessages] = useState([]);
  console.log("🚀 ~ file: Dm.js:50 ~ Dm ~ messages", messages);
  const [loading, setLoading] = useState();
  const [inputText, setInputText] = useState();

  const route = useRoute();
  console.log("🚀 ~ file: Dm.js:51 ~ Dm ~ route", route.params);
  async function fetchMessages() {
    const id = await SecureStore.getItemAsync("id");
    axios
      .post(`${BASEURL}/my/messages`, {
        sender_id: id,
        receiver_id: route.params.receiverId,
        // category_id: route.params.category_id,
      })
      .then((res) => {
        // console.log("response data ---------- ", res.data);
        setMessages(res.data.data);
      })
      .catch((error) => {
        console.log("error");
        if (error.response) {
          console.log(error.response.data);
          setLoading(false);
        } else if (error.request) {
          console.log(error.request);
          setLoading(false);
        } else {
          console.log(error.message);
          setLoading(false);
        }
      });
  }
  async function sendMessage(message) {
    console.log("🚀 ~ file: Dm.js:84 ~ sendMessage ~ message", message);
    console.log(route.params.receiverId, route.params.category_id);
    const id = await SecureStore.getItemAsync("id");
    console.log("🚀 ~ file: Dm.js:87 ~ sendMessage ~ id", id);
    axios
      .post(`${BASEURL}/send/message`, {
        sender_id: id,
        receiver_id: route.params.receiverId,
        category_id: route.params.category_id,
        message: message,
      })
      .then((res) => {
        console.log("response data sendmessage ---------- ", res.data);
        fetchMessages();
        // setMessages(res.data.data);
      })
      .catch((error) => {
        console.log("error");
        if (error.response) {
          console.log(error.response.data);
          setLoading(false);
        } else if (error.request) {
          console.log(error.request);
          setLoading(false);
        } else {
          console.log(error.message);
          setLoading(false);
        }
      });
  }
  useEffect(() => {
    let interval = null;
    interval = setInterval(fetchMessages, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    fetchMessages();
  }, []);
  return (
    <View style={styles.root}>
      <View style={styles.listContainer}>
        <FlatList
          data={messages}
          renderItem={({ item }) => {
            return (
              <View style={{ width: layout.width }}>
                <TextBox
                  text={item.message}
                  read={item.is_read}
                  textAlign={item.text_side}
                  date={item.created_at}
                />
              </View>
            );
          }}
          inverted
        />
      </View>
      <View style={styles.inputContainer}>
        <Formik
          initialValues={{ message: "" }}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            sendMessage(values.message);
            resetForm();
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
            handleReset,
          }) => (
            <CustomInput
              reset={handleReset}
              onBlur={handleBlur("message")}
              onChangeText={handleChange("message")}
              value={values.message}
              submit={handleSubmit}
            />
            // <TextInput
            //   onChangeText={handleChange("message")}
            //   onBlur={handleBlur("message")}
            //   value={values.message}
            //   style={{ width: layout.width }}
            // />
          )}
        </Formik>
      </View>
    </View>
  );
};

export default Dm;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flex: 1,
    // backgroundColor: "pink"
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    flex: 8,
    // backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    width: layout.width,
  },
});
