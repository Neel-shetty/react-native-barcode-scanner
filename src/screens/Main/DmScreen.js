import {
  BackHandler,
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Header from "../../components/DmScreenComponents/Header";
import { layout } from "../../constants/layout";
import Dm from "../../components/DmScreenComponents/Dm";
import { useKeyboard } from "@react-native-community/hooks";
import { useNavigation } from "@react-navigation/native";

const DmScreen = () => {
  const keyboard = useKeyboard();
  const navigation = useNavigation();

  console.log("keyboard isKeyboardShow: ", keyboard.keyboardShown);
  console.log("keyboard keyboardHeight: ", keyboard.keyboardHeight);

  
  return (
    <View style={styles.root}>
      {/* <KeyboardAvoidingView> */}
      <ImageBackground
        source={require("../../../assets/images/bg2.png")}
        resizeMode="cover"
        style={styles.bgImage}
      />
      {/* <View style={{ height: 20 }} /> */}
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.dmContainer}>
        <Dm />
      </View>
      {/* </KeyboardAvoidingView> */}
    </View>
  );
};

export default DmScreen;

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
    transform: [{ scale: 2 }],
  },
  headerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "pink",
    // marginTop:20
    minHeight: 30,
  },
  dmContainer: {
    flex: 10,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "pink",
  },
});
