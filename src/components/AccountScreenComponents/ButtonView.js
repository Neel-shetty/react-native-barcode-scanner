import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ButtonView = () => {
  return (
    <View style={styles.root}>
      <View style={styles.optionBox}>
        <View>
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
        </View>
      </View>
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
    width: 70,
    backgroundColor: "white",
  },
});
