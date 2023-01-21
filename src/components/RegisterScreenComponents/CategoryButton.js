import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";
import { useNavigation } from "@react-navigation/native";

const CategoryButton = ({ data }) => {
  const navigation = useNavigation();
  function onPress() {
    navigation.navigate("RegisterFormScreen");
  }
  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.circle}>
          <Text style={{ color: "white" }}>{data}</Text>
        </View>
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>{data}</Text>
      </View>
    </View>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({
  root: {
    height: 110,
    width: layout.widthp / 4,
    // backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: 75,
    height: 75,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#a16ce6",
  },
  title: {
    fontFamily: "poppins-medium",
  },
});
