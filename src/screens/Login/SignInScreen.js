import { StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import { colors } from "../../constants/colors";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Header from "../../components/SignInScreenComponents/Header";
import { layout } from "../../constants/layout";
import Title from "../../components/SignInScreenComponents/Title";
import InputFields from "../../components/SignInScreenComponents/input/InputFields";

const SignInScreen = () => {
  const [fontsLoaded] = useFonts({
    "poppins-regular": require("../../../assets/fonts/Poppins/Poppins-Regular.ttf"),
    "poppins-medium": require("../../../assets/fonts/Poppins/Poppins-Medium.ttf"),
    "poppins-light": require("../../../assets/fonts/Poppins/Poppins-Light.ttf"),
    "poppins-semibold": require("../../../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "inter-regular": require("../../../assets/fonts/inter/Inter-Regular.ttf"),
    "inter-semibold": require("../../../assets/fonts/inter/Inter-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.root} onLayout={onLayoutRootView}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.popupContainer}>
        <View style={styles.titleContainer}>
          <Title />
        </View>
        <View style={styles.inputContainer}>
          <InputFields />
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: colors.rootBgColor,
  },
  headerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  popupContainer: {
    flex: 6,
    width: layout.width,
    backgroundColor: colors.whiteBg,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: layout.width,
  },
  inputContainer:{
    alignItems:'center',
    justifyContent:'center'
  }
});
