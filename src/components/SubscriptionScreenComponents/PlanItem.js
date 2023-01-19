import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Plan from "./Plan";

const PlanItem = () => {
  return (
    <View style={styles.root}>
      <Plan />
    </View>
  );
};

export default PlanItem;

const styles = StyleSheet.create({
  root: {
    width: 200,
    height: 250,
    // backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});
