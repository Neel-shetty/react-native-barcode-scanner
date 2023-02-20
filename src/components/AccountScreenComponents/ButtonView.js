import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { layout } from "../../constants/layout";

const ButtonView = () => {
  return (
    <View style={styles.root}>
      {["chat", "scanner", "help"].map((item) => {
        console.log("🚀 ~ file: ButtonView.js:11 ~ .map ~ item", item);
        return (
          <View style={styles.optionBox}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
                marginTop: 10,
              }}
            >
              <LinearGradient
                colors={["#8c52ff", "#c471ed"]}
                style={styles.iconContainer}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <MaterialCommunityIcons
                  name="account"
                  size={34}
                  color="white"
                  style={{ transform: [{ rotate: "-45deg" }] }}
                />
              </LinearGradient>
              <View style={{ marginTop: 10 }} />
              <Text style={styles.subtitle}>{item}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default ButtonView;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  optionBox: {
    height: 100,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: layout.width * 0.25,
    marginHorizontal: 15,
    borderRadius: 10,
    elevation: 20,
  },
  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 8,
    transform: [{ rotate: "45deg" }],
    alignItems: "center",
    justifyContent: "center",
  },
  subtitle: {
    fontFamily: "poppins-medium",
    fontSize: 16,
  },
});
