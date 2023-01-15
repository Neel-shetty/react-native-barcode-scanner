import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { layout } from "../../constants/layout";
import Header from "../../components/SignInScreen2Components/Header";
import InputFields from "../../components/KycScreenComponents/InputFields";

const KycScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 70}
      enabled={false}
      style={styles.root}
    >
      <ImageBackground
        source={require("../../../assets/images/bg2.png")}
        resizeMode="cover"
        style={styles.bgImage}
      />
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>KYC</Text>
      </View>
      <View style={styles.inputContainer}>
        <InputFields />
      </View>
      <View
        style={{
          paddingBottom: 30,
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <TouchableOpacity>
          <Text style={styles.help}>Need help?</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default KycScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  bgImage: {
    flex: 1,
    // justifyContent: "center",
    width: layout.width,
    height: layout.height,
    position: "absolute",
    top: 0,
  },
  title: {
    fontFamily: "poppins-semibold",
    fontSize: 40,
    color: "white",
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor:'pink',
    flex: 2,
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 15,
  },
  headerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  help: {
    fontFamily: "poppins-medium",
    fontSize: 16,
    color: "#3e3e3d",
  },
});
