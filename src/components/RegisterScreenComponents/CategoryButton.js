import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";
import { useNavigation } from "@react-navigation/native";

const CategoryButton = ({ image, title, categoryId }) => {
  const navigation = useNavigation();
  function onPress() {
    navigation.navigate("RegisterFormScreen", { categoryId: categoryId });
  }
  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.circle}>
          <Image source={{ uri: image }} style={{ height: 40, width: 40 }} />
        </View>
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>{title}</Text>
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
    backgroundColor: "white",
  },
  title: {
    fontFamily: "poppins-medium",
    color: "white",
  },
});
