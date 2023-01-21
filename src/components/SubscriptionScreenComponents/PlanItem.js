import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Plan from "./Plan";

const PlanItem = ({ title, image, limit, type }) => {
  return (
    <View style={styles.root}>
      <Plan title={title} image={image} limit={limit} type={type} />
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
