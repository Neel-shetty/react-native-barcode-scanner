import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ChatScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Privacy Policy</Text>
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
