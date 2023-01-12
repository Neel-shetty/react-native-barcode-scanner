import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackButton from "../BackButton";
import { layout } from "../../constants/layout";

const Header = ({ back }) => {
  return (
    <View style={styles.root}>
      <BackButton onPress={back} />
      <Text style={styles.title}>App Name</Text>
      <View style={{ height: 35, width: 35 }} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: layout.widthp,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 28.33,
    fontFamily: "poppins-semibold",
  },
});
