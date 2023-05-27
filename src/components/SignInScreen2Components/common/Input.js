import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { layout } from "../../../constants/layout";
import { colors } from "../../../constants/colors";

const Input = ({
  placeholder,
  title,
  onChangeText,
  onBlur,
  value,
  fieldType,
  secureTextEntry = false,
}) => {
  const [showPasswordtoggle, setShowPasswordToggle] = useState(false);

  const formError = useSelector((state) => state.error.error);
  const user = useSelector((state) => state.user.loggedIn);
  // console.log(user,"user...")
  console.log("🚀 ~ file: Input.js:34 ~ formError", formError);
  if (secureTextEntry === true && showPasswordtoggle === true) {
    secureTextEntry = false;
  }

  return (
    <View style={styles.root}>
      {/* <View style={styles.headerContainer}>
        <Text style={styles.infoText}>{title}</Text>
      </View> */}
      <View style={styles.bg}>
        {fieldType === "phoneNumber" ? ( //phone number field
          <View style={styles.inputRow}>
            <TextInput
              placeholder={placeholder}
              style={styles.input}
              onChangeText={onChangeText}
              onBlur={onBlur}
              value={value}
              secureTextEntry={secureTextEntry}
              placeholderTextColor={"white"}
            />
            <Ionicons
              name="ios-checkmark-circle"
              size={22}
              color={formError.phoneNumber === "error" ? "red" : colors.gray}
            />
          </View>
        ) : // not phone number field, aka everything else
        fieldType === "name" ? ( // name field
          <View
            style={
              formError.name === "error" //if the field has errors
                ? [styles.inputRow, { borderBottomColor: colors.gray }]
                : styles.inputRow
            }
          >
            <TextInput
              placeholder={placeholder}
              style={styles.input}
              onChangeText={onChangeText}
              onBlur={onBlur}
              value={value}
              secureTextEntry={secureTextEntry}
              placeholderTextColor={"white"}
            />
            <Ionicons
              name="ios-checkmark-circle"
              size={22}
              color={
                formError.name === "error" ? "red" : colors.gray
                // colors.gray : colors.green
              }
            />
          </View>
        ) : (
          <View
            style={
              fieldType !== "password" //if the field is normal
                ? formError.email == "error" //if the normal field has errors
                  ? [styles.inputRow, { borderBottomColor: colors.gray }]
                  : styles.inputRow
                : formError.password === "error" //if the field is password
                ? [styles.inputRow, { borderBottomColor: colors.gray }] // if the field has errors
                : styles.inputRow
            }
          >
            <TextInput
              placeholder={placeholder}
              style={styles.input}
              onChangeText={onChangeText}
              onBlur={onBlur}
              value={value}
              secureTextEntry={secureTextEntry}
              placeholderTextColor={"white"}
            />
            {fieldType !== "password" && (
              <Ionicons
                name="ios-checkmark-circle"
                size={22}
                color={formError.email === "error" ? "red" : colors.gray}
              />
            )}
            <TouchableOpacity
              onPress={() => {
                setShowPasswordToggle(!showPasswordtoggle);
              }}
            >
              {fieldType === "password" &&
                (showPasswordtoggle ? (
                  <Ionicons
                    name="eye"
                    size={22}
                    color={
                      formError.password === "error" ? "red" : colors.gray
                      // ? colors.gray
                      // : colors.green
                    }
                  />
                ) : (
                  <Ionicons
                    name="eye-off"
                    size={22}
                    color={
                      formError.password === "error" ? "red" : colors.gray
                      // ? colors.gray
                      // : colors.green
                    }
                  />
                ))}
            </TouchableOpacity>
          </View>
        )}
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
    // backgroundColor: "white",
    backgroundColor: "black",
    borderRadius: 10,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
  },
  input: {
    width: layout.width * 0.8,
    fontFamily: "poppins-medium",
    fontSize: 12,
    color: "white",
    // backgroundColor: "pink",
    // paddingLeft: 10,
  },
  inputRow: {
    flexDirection: "row",
    // borderBottomColor: colors.green,
    // borderBottomWidth: 2.5,
    // paddingBottom: 5,
    paddingHorizontal: 10,
    // borderWidth: 1,
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
