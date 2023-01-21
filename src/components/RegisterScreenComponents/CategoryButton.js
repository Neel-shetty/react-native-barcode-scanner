import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";

const CategoryButton = ({ data }) => {
  return (
    <View style={styles.root}>
      <View style={styles.circle}>
        <Text style={{ color: "white" }}>{data}</Text>
      </View>
      <View>
        <Text style={styles.title}>{data}</Text>
      </View>
    </View>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({
  root: {
    height: 110,
    width: layout.widthp / 4,
    // backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: 75,
    height: 75,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#a16ce6",
  },
  title: {
    fontFamily: "poppins-medium",
  },
});
