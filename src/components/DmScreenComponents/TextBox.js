import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";

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
        <Text style={[styles.message, type === "receiver" ? {} : null]}>
          {item.text}
        </Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>10:45pm</Text>
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
    fontFamily: "poppins-regular",
    fontSize: 16,
    textAlign: "left",
  },
  timeContainer: {
    alignSelf: "flex-end",
  },
  textContainer: {
    alignSelf: "flex-start",
  },
});
