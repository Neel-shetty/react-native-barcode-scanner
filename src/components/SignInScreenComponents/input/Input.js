import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { layout } from "../../../constants/layout";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../constants/colors";

const Input = ({placeholder, title, type}) => {
  return (
    <View style={styles.root}>
      <View style={styles.headerContainer}>
        <Text style={styles.infoText}>Your Email/Username</Text>
      </View>
      <View style={styles.inputRow}>
        <TextInput placeholder="Email/Username" style={styles.input} />
        <Ionicons name="ios-checkmark-circle" size={22} color={colors.green} />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  root: {
    width: layout.widthp,
    alignItems: "flex-start",
    justifyContent: "center",
    height: 68,
  },
  input: {
    width: layout.width * 0.8,
    fontFamily: "inter-semibold",
    fontSize: 16,
  },
  inputRow: {
    flexDirection: "row",
    borderBottomColor: colors.green,
    borderBottomWidth: 2.5,
    paddingBottom: 5,
  },
  infoText: {
    fontFamily: "inter-semibold",
    fontSize: 12,
    color: colors.gray,
  },
  headerContainer: {
    paddingBottom: 8,
  },
});
