import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../components/RegisterScreenComponents/Header";
import { layout } from "../../constants/layout";

const RegisterScreen = () => {
  return (
    <View style={styles.root}>
      <ImageBackground
        source={require("../../../assets/images/bg2.png")}
        resizeMode="cover"
        style={styles.bgImage}
      />
      <Header />
      <Text>RegisterScreen</Text>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bgImage: {
    flex: 1,
    width: layout.width,
    height: layout.height,
    position: "absolute",
    top: 0,
    transform: [{ scale: 2 }],
  },
});
