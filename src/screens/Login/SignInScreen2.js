import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { layout } from "../../constants/layout";
import Header from "../../components/SignInScreen2Components/Header";
import InputFields from "../../components/SignInScreen2Components/InputFields";
import CustomButton from "../../components/SignInScreen2Components/common/CustomButton";

const SignInScreen2 = () => {
  return (
    <View>
      <ImageBackground
        source={require("../../../assets/images/bg2.png")}
        resizeMode="cover"
        style={styles.bgImage}
      />
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Sign In</Text>
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
    </View>
  );
};

export default SignInScreen2;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
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
    // flex: 1,
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  help: {
    fontFamily: "poppins-medium",
    fontSize: 16,
    color: "#3e3e3d",
  },
});
