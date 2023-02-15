import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";
import { Ionicons } from "@expo/vector-icons";

const TextBox = ({ item, type }) => {
  return (
    <View
      style={[
        styles.root,
        type === "receiver"
          ? {
              backgroundColor: "#846dca",
              alignSelf: "flex-start",
              marginLeft: 20,
            }
          : null,
      ]}
    >
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.message,
            type === "receiver" ? { color: "white" } : null,
          ]}
        >
          {item.text}
        </Text>
      </View>
      <View style={styles.timeContainer}>
        <Text
          style={[
            styles.time,
            type === "receiver" ? { color: "#baa8df" } : null,
          ]}
        >
          10:45pm
        </Text>
        {type === "sender" ? (
          <Ionicons
            name="checkmark"
            size={15}
            color="black"
            style={{ paddingLeft: 5 }}
          />
        ) : null}
      </View>
    </View>
  );
};

export default TextBox;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    maxWidth: layout.width * (2 / 3),
    backgroundColor: "#e1bcf6",
    marginVertical: 10,
    alignSelf: "flex-end",
    borderRadius: 10,
    marginRight: 20,
    padding: 10,
  },
  message: {
    fontFamily: "poppins-medium",
    fontSize: 16,
    textAlign: "left",
    color: "#605ea7",
  },
  timeContainer: {
    alignSelf: "flex-end",
    flexDirection: "row",
  },
  textContainer: {
    alignSelf: "flex-start",
  },
  time: {
    color: "#7e738d",
    fontFamily: "poppins-regular",
    fontSize: 12,
  },
});
