import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomInput from "./CustomInput";
import TextBox from "./TextBox";
import { layout } from "../../constants/layout";
import { useState } from "react";
import axios from "axios";

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
  const [loading, setLoading] = useState()
  async function fetchMessages() {
    axios
      .post(`${BASEURL}/my/category-wise/users`, {
        sender_id:''
      })
      .then((res) => {
        console.log("response data ---------- ", res.data);
        setUsers(res.data.data);
      })
      .catch((error) => {
        console.log("error");
        if (error.response) {
          console.log(error.response.data);
          if (error.response.data.status == 0) {
            setUsers([]);
          }
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
  return (
    <View style={styles.root}>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <View style={{ width: layout.width }}>
                <TextBox item={item} type={item.type} />
              </View>
            );
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <CustomInput />
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
