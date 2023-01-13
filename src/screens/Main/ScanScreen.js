import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ScanScreen = () => {
  return (
    <View style={styles.root}>
      <Text>ScanScreen</Text>
    </View>
  );
};

export default ScanScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
