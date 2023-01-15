import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";

const UploadButton = () => {
  return (
    <View style={styles.root}>
      <View style={styles.bg}>
        <Text>UploadButton</Text>
      </View>
    </View>
  );
};

export default UploadButton;

const styles = StyleSheet.create({
  root: {
    width: layout.widthp,
    alignItems: "flex-start",
    justifyContent: "center",
    height: 68,
  },
  bg: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
});
