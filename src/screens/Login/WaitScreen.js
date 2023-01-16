import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";

const WaitScreen = () => {
  return (
    <View style={styles.root}>
      <ImageBackground
        source={require("../../../assets/images/bg2.png")}
        resizeMode="cover"
        style={styles.bgImage}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Please wait while we complete your KYC</Text>
      </View>
    </View>
  );
};

export default WaitScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  bgImage: {
    flex: 1,
    // justifyContent: "center",
    width: layout.width,
    height: layout.height,
    position: "absolute",
    top: 0,
  },
  title: {
    fontFamily: "poppins-semibold",
    fontSize: 40,
    color: "white",
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    // backgroundColor: "pink",
    flex: 1,
    width: layout.widthp,
    paddingTop: 20,
  },
});
