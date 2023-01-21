import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";

const OrganizationButton = ({ data }) => {
  return (
    <View style={styles.root}>
      <View style={styles.box}>
        <Text>{data}</Text>
      </View>
      <View>
        <Text style={styles.title}>{data}</Text>
      </View>
    </View>
  );
};

export default OrganizationButton;

const styles = StyleSheet.create({
  root: {
    height: 140,
    width: layout.widthp / 3,
    // backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    height: 100,
    width: 100,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#a16ce6",
  },
  title: {
    fontFamily: "poppins-medium",
  },
});
