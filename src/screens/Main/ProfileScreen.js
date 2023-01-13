import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

const ProfileScreen = () => {
  async function getValueFor(key) {
    const result = await SecureStore.getItemAsync(key);
    console.log("🚀 ~ file: ProfileScreen.js:9 ~ getValueFor ~ result", result);
    return result;
  }

  async function prepareValues() {
    let id = await getValueFor("id");
    // id = JSON.stringify(id);
    console.log("🚀 ~ file: ProfileScreen.js:15 ~ getProfile ~ id", id);
    const token = await getValueFor("token");
    console.log("🚀 ~ file: ProfileScreen.js:17 ~ getProfile ~ token", token);
    return { id: id, token: token };
  }

  async function getProfile() {
    const values = await prepareValues();
    console.log("🚀 ~ file: ProfileScreen.js:24 ~ getProfile ~ values", values);
    axios
      .post("http://codelumina.com/project/scanme/api/user/profile", {
        userid: values.id,
        token: values.token,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => console.warn(e));
  }
  return (
    <View style={styles.root}>
      <Text>ProfileScreen</Text>
      <Button title="Fetch" onPress={getProfile} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
