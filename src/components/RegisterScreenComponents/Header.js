import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { layout } from "../../constants/layout";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();

  function onPress() {
    // save("isLoggedIn", "false");
    // dispatch(setLoggedIn(false));
    navigation.goBack();
  }
  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name="chevron-back" size={30} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>Register</Text>
      <View style={{ height: 30, width: 30 }} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  root: {
    width: layout.widthp,
    alignSelf: "center",
    justifyContent: "space-between",
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: "poppins-semibold",
    fontSize: 20,
    color: "white",
  },
});
