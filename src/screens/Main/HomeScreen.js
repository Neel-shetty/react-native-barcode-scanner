import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../../store/slice/userSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  function Logout() {
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
