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
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  root: {
    width: layout.widthp,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 15,
  },
});
