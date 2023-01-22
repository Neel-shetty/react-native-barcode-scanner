import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Fields from "../../components/RegisterFormScreenComponents/Fields";
import { layout } from "../../constants/layout";

const RegisterFormScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 70}
      enabled={false}
      style={styles.root}
    >
      <ImageBackground
        source={require("../../../assets/images/subscriptionBg.jpeg")}
        resizeMode="cover"
        style={styles.bgImage}
      />
      <View style={styles.root}>
        <Text>test</Text>
        <Fields />
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterFormScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bgImage: {
    flex: 1,
    width: layout.width,
    height: layout.height,
    position: "absolute",
    top: 0,
    // transform: [{ scale: 2 }],
  },
});
