import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "./Input";

const InputFields = () => {
  return (
    <View style={styles.root}>
      <Input />
    </View>
  );
};

export default InputFields;

const styles = StyleSheet.create({
  root: {},
});
