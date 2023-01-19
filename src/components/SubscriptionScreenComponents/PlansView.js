import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Plan from "./Plan";

const PlanView = () => {
  return (
    <View style={styles.root}>
      <Plan title={"Bronze"} />
    </View>
  );
};

export default PlanView;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
  },
});
