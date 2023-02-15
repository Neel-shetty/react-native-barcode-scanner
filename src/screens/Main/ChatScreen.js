import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../components/DmScreenComponents/Header";

const ChatScreen = () => {
  return (
    <View style={styles.root}>
      <Header />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
