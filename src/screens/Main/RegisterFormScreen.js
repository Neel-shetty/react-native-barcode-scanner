import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Fields from "../../components/RegisterFormScreenComponents/Fields";

const formData = [
  {
    placeHolder: "Name",
    type: "input",
    fieldName: "user_name",
  },
  {
    placeHolder: "Adhaar",
    type: "image",
    fieldName: "adhaar_front",
  },
  {
    placeHolder: "",
    type: "radio",
    Options: ["1", "2"],
  },
];

const RegisterFormScreen = () => {
  return (
    <View style={styles.root}>
      <Text>test</Text>
      <Fields />
    </View>
  );
};

export default RegisterFormScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
