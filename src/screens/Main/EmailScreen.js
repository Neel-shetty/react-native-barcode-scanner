import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const EmailScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Email</Text>
    </View>
  );
};

export default EmailScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
