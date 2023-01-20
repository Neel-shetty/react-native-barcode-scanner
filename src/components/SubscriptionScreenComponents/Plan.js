import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { layout } from "../../constants/layout";
import { Fontisto } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const Plan = ({ title, subtitle, icon }) => {
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
        ></ImageBackground>
      </LinearGradient>
      <View style={styles.titleContainer}>
        <View>
          <Text style={styles.title}>Silver</Text>
          <View style={{ flexDirection: "row" }}>
            <Fontisto name="persons" size={14} color="white" />
            <Text style={styles.subtitle}>+6 Entries</Text>
          </View>
        </View>
        <View>
          <SimpleLineIcons name="login" size={24} color="white" />
        </View>
      </View>
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
    width: 200,
    height: 250,
    // backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
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
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: 20,
  },
  title: {
    fontFamily: "poppins-semibold",
    fontSize: 18,
  },
  subtitle: {
    fontFamily: "poppins-medium",
    paddingLeft: 10,
  },
});
