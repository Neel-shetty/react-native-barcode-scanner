import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../constants/colors";

const SignInScreen = () => {
  return (
    <View style={styles.root}>
      <Text>SignInScreen</Text>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: colors.rootBgColor,
  },
});
