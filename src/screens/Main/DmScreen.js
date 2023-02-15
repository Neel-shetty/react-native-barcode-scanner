import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../components/DmScreenComponents/Header";
import { layout } from "../../constants/layout";
import Dm from "../../components/DmScreenComponents/Dm";

const DmScreen = () => {
  return (
    <View style={styles.root}>
      <ImageBackground
        source={require("../../../assets/images/bg2.png")}
        resizeMode="cover"
        style={styles.bgImage}
      />
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.dmContainer}>
        <Dm />
      </View>
    </View>
  );
};

export default DmScreen;

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
  headerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  dmContainer: {
    flex: 10,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "pink",
  },
});
