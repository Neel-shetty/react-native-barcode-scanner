import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ChatItem from "./ChatItem";

const ChatList = () => {
  return (
    <View style={styles.root}>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14]}
        renderItem={({ item }) => {
          return <ChatItem />;
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
