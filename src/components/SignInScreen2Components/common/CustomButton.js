import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { layout } from "../../../constants/layout";
import { colors } from "../../../constants/colors";

const CustomButton = ({ title, onPress, loading, fontSize }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (loading) return;
        onPress();
      }}
    >
      <View style={styles.root}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text style={[styles.title, { fontSize }]}>{title}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  root: {
    width: layout.widthp / 2.5,
    height: 46,
    borderRadius: 10,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
  },
  title: {
    fontFamily: "poppins-medium",
    fontSize: 12,
    color: "white",
  },
});
