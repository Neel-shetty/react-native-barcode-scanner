import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const BackButton = () => {
  return (
    <View style={styles.root}>
      <Ionicons name="ios-arrow-back" size={24} color="#230B34" />
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  root: {
    borderWidth: 2,
    borderColor: "rgba(24, 26, 32, 0.1)",
    borderRadius: 10,
    width: 35,
    height: 35,
    alignItems:'center',
    justifyContent:'center'
  },
});
