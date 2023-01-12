import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback } from "react";
import { colors } from "../../constants/colors";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Header from "../../components/SignInScreenComponents/Header";
import { layout } from "../../constants/layout";
import Title from "../../components/SignInScreenComponents/Title";
import InputFields from "../../components/SignInScreenComponents/input/InputFields";
import BottomText from "../../components/SignInScreenComponents/BottomText";

const SignInScreen = () => {
  const [fontsLoaded] = useFonts({
    "poppins-regular": require("../../../assets/fonts/Poppins/Poppins-Regular.ttf"),
    "poppins-medium": require("../../../assets/fonts/Poppins/Poppins-Medium.ttf"),
    "poppins-light": require("../../../assets/fonts/Poppins/Poppins-Light.ttf"),
    "poppins-semibold": require("../../../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "inter-regular": require("../../../assets/fonts/inter/Inter-Regular.ttf"),
    "inter-semibold": require("../../../assets/fonts/inter/Inter-SemiBold.ttf"),
    "inter-bold": require("../../../assets/fonts/inter/Inter-Bold.ttf"),
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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 70}
      enabled={false}
      style={styles.root}
    >
      <View style={styles.headerContainer} onLayout={onLayoutRootView}>
        <Header />
      </View>
      <View style={styles.popupContainer}>
        <View style={styles.titleContainer}>
          <Title />
        </View>
        <View style={styles.inputContainer}>
          <InputFields />
        </View>
        <View style={styles.bottomContainer}>
          <BottomText />
        </View>
        <View style={styles.empty} />
      </View>
    </KeyboardAvoidingView>
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
    flex: 1,
    // backgroundColor: "pink",
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 3,
    // backgroundColor: "violet",
  },
  bottomContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    // backgroundColor: "coral",
  },
  empty: {
    flex: 4,
  },
});
