import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { layout } from "../../constants/layout";

const Header = () => {
  return (
    <View style={styles.root}>
      <Ionicons name="chevron-back" size={30} color="black" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  root: {
    width: layout.widthp,
    alignSelf: "center",
    justifyContent: "center",
    marginTop:15
  },
});
