import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";
import { useNavigation } from "@react-navigation/native";

const OrganizationButton = ({ image, title, categoryId }) => {
  const navigation = useNavigation();
  function onPress() {
    navigation.navigate("RegisterFormScreen", { categoryId: categoryId });
  }
  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.box}>
          <Image source={{ uri: image }} style={{ height: 70, width: 70 }} />
        </View>
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default OrganizationButton;

const styles = StyleSheet.create({
  root: {
    height: 140,
    width: layout.widthp / 3,
    // backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    height: 100,
    width: 100,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#a16ce6",
  },
  title: {
    fontFamily: "poppins-medium",
  },
});
