import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ChatList = () => {
  return (
    <View style={styles.root}>
      <View style={styles.profileContainer}>
        <Image />
      </View>
      <View style={styles.nameContainer}>
        <Text>test</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text>test</Text>
      </View>
    </View>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  profileContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  nameContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
  },
  detailContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
