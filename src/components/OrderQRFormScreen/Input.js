import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { layout } from "../../constants/layout";
import { colors } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

const Input = ({
  placeholder,
  title,
  onChangeText,
  onBlur,
  value,
  fieldType,
  secureTextEntry = false,
  keyboardType,
  name,
}) => {
  // console.log("🚀 ~ file: Input.js:25 ~ name", name);
  const [showPasswordtoggle, setShowPasswordToggle] = useState(false);

  const formError = useSelector((state) => state.error.error);
  const user = useSelector((state) => state.user.loggedIn);
  // console.log(user,"user...")
  // console.log("🚀 ~ file: Input.js:34 ~ formError", formError);

  return (
    <View style={styles.root}>
      <View style={styles.bg}>
        <View style={styles.inputRow}>
          <TextInput
            placeholder={placeholder}
            style={styles.input}
            onChangeText={onChangeText}
            onBlur={onBlur}
            value={value}
            keyboardType={keyboardType}
            multiline={fieldType === "address" ? true : false}
            // secureTextEntry={secureTextEntry}
          />
          {/* {fieldType === "name" ? (
            <Ionicons
              name="ios-checkmark-circle"
              size={22}
              color={formError.name === "error" ? "red" : colors.gray}
            />
          ) : fieldType === "address" ? (
            <Ionicons
              name="ios-checkmark-circle"
              size={22}
              color={formError.address === "error" ? "red" : colors.gray}
            />
          ) : (
            <Ionicons
              name="ios-checkmark-circle"
              size={22}
              color={colors.gray}
            />
          )} */}
          <View style={{ width: 22 }} />
        </View>
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
  bg: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: layout.width * 0.8,
    fontFamily: "poppins-medium",
    fontSize: 12,
    // backgroundColor: "pink",
    // paddingLeft: 10,
  },
  inputRow: {
    flexDirection: "row",
    // borderBottomColor: colors.green,
    // borderBottomWidth: 2.5,
    // paddingBottom: 5,
    paddingHorizontal: 10,
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
