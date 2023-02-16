import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ChatItem from "./ChatItem";
import { layout } from "../../constants/layout";
import axios from "axios";
import { BASEURL } from "../../constants/apiurl";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";

const ChatList = () => {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState();
  const route = useRoute();

  async function fetchUsers() {
    axios
      .post(`${BASEURL}/my/inbox/users`, {
        barcode: route.params.barcode,
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

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return;

  return (
    <View style={styles.root}>
      <FlatList
        data={users}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 70, width: layout.width }}>
              <ChatItem name={item.name} image={item.image} />
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
