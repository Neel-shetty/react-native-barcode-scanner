import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { layout } from "../../constants/layout";

const Plan = ({ title }) => {
  return (
    <View style={styles.root}>
      <LinearGradient
        colors={["#8c52ff", "#c471ed"]}
        style={styles.iconContainer}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <ImageBackground
          source={require("../../../assets/images/ss.png")}
          resizeMode="contain"
          style={styles.bgImage}
        >
          {/* <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View> */}
        </ImageBackground>
      </LinearGradient>
    </View>
  );
};

export default Plan;

const styles = StyleSheet.create({
  iconContainer: {
    width: 130,
    height: 130,
    borderRadius: 20,
    transform: [{ rotate: "45deg" }],
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    width: 130,
    height: 130,
  },
  bgImage: {
    flex: 1,
    // justifyContent: "center",
    width: 80,
    height: 80,
    position: "absolute",
    top: 0,
    transform: [
      { scale: 1.5 },
      { rotate: "25deg" },
      { translateY: 10 },
      { translateX: 5 },
    ],
  },
  titleContainer: {
    transform: [{ rotate: "-70deg" }, { translateY: 40 }, { translateX: -30 }],
    alignItems: "center",
    justifyContent: "center",
    // width: 70,
    // position: "absolute",
    // top: 10,
    // left: 10,
    // backgroundColor: "pink",
  },
});
