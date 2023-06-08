import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useRef } from "react";
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
import firestore from "@react-native-firebase/firestore";

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
  const [currentUserId, setCurrentUserId] = useState();
  console.log("🚀 ~ file: Dm.js:50 ~ Dm ~ messages", messages);

  const [loading, setLoading] = useState();
  const [inputText, setInputText] = useState();

  const route = useRoute();
  console.log("🚀 ~ file: Dm.js:51 ~ Dm ~ route", route.params.receiverId);

  /**
   * @description old direct implementation of fetching messages
   */
  // async function fetchMessages() {
  //   const id = await SecureStore.getItemAsync("id");
  //   console.log("🚀 ~ file: Dm.js:59 ~ fetchMessages ~ id:", id);
  //   axios
  //     .post(`${BASEURL}/my/messages`, {
  //       sender_id: id,
  //       receiver_id: route.params.receiverId,
  //       category_id: route.params.category_id,
  //     })
  //     .then((res) => {
  //       // console.log("response data ---------- ", res.data);
  //       setMessages(res.data.data);
  //     })
  //     .catch((error) => {
  //       console.log("error");
  //       if (error.response) {
  //         console.log(error.response.data);
  //         setLoading(false);
  //       } else if (error.request) {
  //         console.log(error.request);
  //         setLoading(false);
  //       } else {
  //         console.log(error.message);
  //         setLoading(false);
  //       }
  //     });
  // }
  async function sendMessageToOwnServer(message) {
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
        // fetchMessages();
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
  // useEffect(() => {
  //   let interval = null;
  //   interval = setInterval(fetchMessages, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);
  // useEffect(() => {
  //   fetchMessages();
  // }, []);

  /**
   * @description new implementation of fetching messages using firebase
   */

  const flatListRef = useRef(null);

  const userID = SecureStore.getItemAsync("id");
  const combinedUserId = React.useMemo(() => {
    const user = route.params?.userId;
    /** @type string[] */
    const tmpArr = [Number(user), Number(route.params?.receiverId)];
    console.log("🚀 ~ file: Dm.js:143 ~ combinedUserId ~ tmpArr:", tmpArr);
    tmpArr.sort((a, b) => a > b);
    console.log("🚀 ~ file: Dm.js:143 ~ combinedUserId ~ tmpArr:", tmpArr);
    const cId = tmpArr.join("-");
    return cId;
    // return Number(user) > Number(route.params?.receiverId)
    //   ? `${route.params.receiverId}-${user}`
    //   : `${user}-${route.params.receiverId}`;
  }, [userID]);
  console.log("🚀 ~ file: Dm.js:130 ~ Dm ~ combinedUserId", combinedUserId);

  async function getMessages() {
    const docId = await combinedUserId;
    console.log("🚀 ~ file: Dm.js:150 ~ getMessages ~ docId:", docId);
    const messagesDoc = firestore()
      .collection("chats")
      .doc(docId)
      .collection("messages")
      .orderBy("createdAt", "asc");
    // .limitToLast(5)
    const unsub = messagesDoc.onSnapshot((snapshot) => {
      console.log("🚀 ~ file: Dm.js:160 ~ unsub ~ snapshot:", snapshot);
      // if (messages.length === 0) {
      const texts = [];
      snapshot.forEach((message) => {
        texts.push(message.data());
      });
      setMessages(texts);
      // }
      // check if the change type is added and add that message to state
      // snapshot.docChanges().forEach((change) => {
      //   if (change.type === "added") {
      //     setMessages((prev) => [...prev, change.doc.data()]);
      //   }
      // });
    });
    return;
  }

  async function sendMessage(message) {
    sendMessageToOwnServer(message);
    const user = await userID;
    const docId = await combinedUserId;
    await firestore()
      .collection("chats")
      .doc(docId)
      .collection("messages")
      .add({
        uid: user,
        message,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
  }

  //set current user id using effect
  // React.useEffect(() => {
  //   async function setUserId() {
  //     const user = await userID;
  //     setUserId(user);
  //   }
  //   setUserId();
  // }, [userID]);

  useEffect(() => {
    const unsub = getMessages();
  }, []);

  return (
    <View style={styles.root}>
      <View style={styles.listContainer}>
        <FlatList
          data={messages}
          renderItem={({ item }) => {
            // console.log("🚀 ~ file: Dm.js:202 ~ Dm ~ item", item.createdAt);
            return (
              <View style={{ width: layout.width }}>
                <TextBox
                  text={item?.message}
                  read={item?.is_read}
                  textAlign={
                    item.uid === route.params?.userId ? "right" : "left"
                  }
                  date={item?.createdAt?.nanoseconds}
                />
              </View>
            );
          }}
          ref={flatListRef}
          onContentSizeChange={({}) => {
            if (messages?.length > 0) {
              flatListRef.current?.scrollToEnd({ animated: true });
            }
          }}
          //   inverted
        />
      </View>
      <View style={styles.inputContainer}>
        <Formik
          initialValues={{ message: "" }}
          onSubmit={(values, { resetForm }) => {
            if (values.message === "") return;
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
