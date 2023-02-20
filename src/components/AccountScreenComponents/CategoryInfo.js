import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";

const CategoryInfo = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.vehicle}>VEHICLE</Text>
      <Text style={styles.number}>DL03AN1123</Text>
    </View>
  );
};

export default CategoryInfo;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    height: layout.height * 0.17,
    backgroundColor: "white",
    width: layout.width * 0.8,
    borderRadius: 20,
    elevation: 20,
    shadowColor: "black",
  },
  vehicle: {
    fontFamily: "poppins-semibold",
    fontSize: 18,
  },
  number: {
    fontFamily: "poppins-semibold",
    fontSize: 34,
  },
});
