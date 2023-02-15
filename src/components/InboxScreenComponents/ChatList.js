import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ChatItem from "./ChatItem";
import { layout } from "../../constants/layout";
import axios from "axios";
import { BASEURL } from "../../constants/apiurl";
import { useState } from "react";

const ChatList = () => {
  const [users, setUsers] = useState();

  async function fetchUsers() {
    axios
      .post(`${BASEURL}/my/inbox/lists`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        if (error) {
          console.log(error.message);
        }
      });
  }

  return (
    <View style={styles.root}>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14]}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 70, width: layout.width }}>
              <ChatItem />
            </View>
          );
        }}
      />
    </View>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
