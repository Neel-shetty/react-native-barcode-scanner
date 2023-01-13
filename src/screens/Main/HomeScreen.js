import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../../store/slice/userSlice";
import * as SecureStore from "expo-secure-store";

const HomeScreen = () => {
  const dispatch = useDispatch();
  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

  function Logout() {
    save("token", "false");
    dispatch(setLoggedIn(false));
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Logout" onPress={Logout} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
