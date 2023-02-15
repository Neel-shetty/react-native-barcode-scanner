import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { layout } from "../../constants/layout";
import { Ionicons } from "@expo/vector-icons";

const CustomInput = () => {
  return (
    <View style={styles.root}>
      <TextInput
        style={styles.input}
        placeholder="Message"
        placeholderTextColor={"white"}
        autoCapitalize="sentences"
      />
      <TouchableOpacity>
        <Ionicons name="send" color={"white"} size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  root: {
    width: layout.widthp,
    backgroundColor: "rgba(0,0,0,0.2)",
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 10,
  },
  input: {
    // backgroundColor: "pink",
    height: 40,
    width: layout.width * 0.7,
    fontFamily: "poppins-semibold",
    color: "white",
    fontSize: 16,
  },
});
