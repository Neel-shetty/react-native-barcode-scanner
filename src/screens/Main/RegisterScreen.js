import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../components/RegisterScreenComponents/Header";
import { layout } from "../../constants/layout";
import Categories from "../../components/RegisterScreenComponents/Categories";
import Organizations from "../../components/RegisterScreenComponents/Organizations";

const RegisterScreen = () => {
  return (
    <View style={styles.root}>
      <ImageBackground
        source={require("../../../assets/images/bg2.png")}
        resizeMode="cover"
        style={styles.bgImage}
      />
      <Header />
      <View style={styles.categories}>
        <Categories />
      </View>
      <View style={styles.organizations}>
        <Organizations />
      </View>
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
  categories: {
    flex: 1,
  },
  organizations: {
    flex: 1,
  },
});
