import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../constants/colors";

const InputView = ({ title }) => {
  return (
    <View style={styles.root}>
      <TouchableOpacity>
        <View style={styles.bg}>
          <View>
            <Text numberOfLines={1} style={[styles.title, { color: "black" }]}>
              {title}
            </Text>
          </View>
          <View>
            <Feather name="lock" size={24} color={(colors.gray)} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InputView;

const styles = StyleSheet.create({
  root: {
    width: layout.widthp,
    alignItems: "flex-start",
    justifyContent: "center",
    height: 68,
    width: layout.widthp,
  },
  bg: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 45,
    alignItems: "center",
    justifyContent: "space-between",
    width: layout.widthp,
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: "inter-semibold",
    fontSize: 16,
    color: "rgba(181,181,181,255)",
    // paddingLeft: 10,
    // color:colors.gray
  },
});
