import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { layout } from "../../../constants/layout";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../constants/colors";
import { Formik } from "formik";

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
  if(secureTextEntry===true && showPasswordtoggle===true){
    secureTextEntry=false
  }
  return (
    <View style={styles.root}>
      <View style={styles.headerContainer}>
        <Text style={styles.infoText}>{title}</Text>
      </View>
      <View style={styles.inputRow}>
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          secureTextEntry={secureTextEntry}
        />
        {fieldType !== "password" && (
          <Ionicons
            name="ios-checkmark-circle"
            size={22}
            color={colors.green}
          />
        )}
        <TouchableOpacity
          onPress={() => {
            setShowPasswordToggle(!showPasswordtoggle);
          }}
        >
          {fieldType === "password" &&
            (showPasswordtoggle ? (
              <Ionicons name="eye" size={22} color={colors.green} />
            ) : (
              <Ionicons name="eye-off" size={22} color={colors.green} />
            ))}
        </TouchableOpacity>
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
