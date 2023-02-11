import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ChatList = () => {
  return (
    <View style={styles.root}>
      <View style={styles.profileContainer}>
        <Image />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>test</Text>
        <Text style={styles.preview}>test</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.preview}>now</Text>
        <View style={{ height: 20, width: 20, borderRadius: 20 }}>
          <Text>2</Text>
        </View>
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
  name: {
    fontFamily: "poppins-semibold",
    fontSize: 16,
  },
  preview: {
    fontFamily: "poppins-semibold",
    fontSize: 14,
  },
});
