import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { layout } from "../../constants/layout";
import Header from "../../components/OrderQRScreenComponents/Header";
import InputFields from "../../components/EditProfileScreenComponents/InputFields";
import { colors } from "../../constants/colors";

const EditProfileScreen = () => {
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 70}
      enabled={false}
      style={styles.root}
    >
      <View style={styles.root}>
        {/* <ImageBackground
          source={require("../../../assets/images/bg2.png")}
          resizeMode="cover"
          style={styles.bgImage}
        /> */}
        <View style={styles.headerContainer}>
          <Header title={"Edit Profile"} />
        </View>
        <View style={{ flex: 8 }}>
          <InputFields />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blackBg,
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
  },
});
