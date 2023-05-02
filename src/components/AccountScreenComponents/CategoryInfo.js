import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";

const CategoryInfo = ({ category, loading }) => {
  return (
    <View style={styles.root}>
      {loading ? (
        <ActivityIndicator color={"white"} />
      ) : (
        <>
          <Text style={styles.vehicle}>{category?.category_name}</Text>
          <Text style={styles.number}>{category?.form_value}</Text>
        </>
      )}
    </View>
  );
};

export default CategoryInfo;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    height: layout.height * 0.17,
    backgroundColor: "black",
    width: layout.width * 0.8,
    borderRadius: 20,
    elevation: 20,
    shadowColor: "black",
  },
  vehicle: {
    fontFamily: "poppins-semibold",
    fontSize: 18,
    color: "white",
  },
  number: {
    fontFamily: "poppins-semibold",
    fontSize: 34,
    color: "white",
  },
});
