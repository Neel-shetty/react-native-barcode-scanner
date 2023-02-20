import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";

const Banner = () => {
  return (
    <View style={styles.root}>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    height: layout.height * 0.2,
    width: layout.widthp,
    backgroundColor: "white",
    borderRadius: 10,
  },
});
