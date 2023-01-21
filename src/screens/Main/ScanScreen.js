import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { layout } from "../../constants/layout";
import { ssstyle, style } from "../../constants/style";

const ScanScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Email</Text>
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
