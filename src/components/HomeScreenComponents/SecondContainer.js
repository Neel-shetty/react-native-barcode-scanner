import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";

const SecondContainer = () => {
  return (
    <View style={styles.root}>
      <Text>MainContainer</Text>
    </View>
  );
};

export default SecondContainer;

const styles = StyleSheet.create({
  root: {
    width: layout.widthp,
    backgroundColor: "white",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
