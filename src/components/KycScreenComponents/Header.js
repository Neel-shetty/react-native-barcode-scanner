import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { layout } from "../../constants/layout";
import { useNavigation } from "@react-navigation/native";
import { setLoggedIn } from "../../store/slice/userSlice";
import { useDispatch } from "react-redux";
import * as SecureStore from "expo-secure-store";

const Header = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }
  function onPress() {
    save("isLoggedIn", "false");
    dispatch(setLoggedIn(false));
  }
  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name="chevron-back" size={30} color="black" />
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
