import {
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback } from "react";
import { layout } from "../../constants/layout";
import Header from "../../components/KycScreenComponents/Header";
import InputFields from "../../components/KycScreenComponents/InputFields";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../constants/colors";

SplashScreen.preventAutoHideAsync();

const KycScreen = () => {
  const [fontsLoaded] = useFonts({
    "poppins-regular": require("../../../assets/fonts/Poppins/Poppins-Regular.ttf"),
    "poppins-medium": require("../../../assets/fonts/Poppins/Poppins-Medium.ttf"),
    "poppins-light": require("../../../assets/fonts/Poppins/Poppins-Light.ttf"),
    "poppins-semibold": require("../../../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "inter-regular": require("../../../assets/fonts/inter/Inter-Regular.ttf"),
    "inter-medium": require("../../../assets/fonts/inter/Inter-Medium.ttf"),
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
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 70}
        enabled={false}
        style={styles.root}
      >
        <SafeAreaView style={styles.root}>
          {/* <ImageBackground
            source={require("../../../assets/images/bg2.png")}
            resizeMode="cover"
            style={styles.bgImage}
          /> */}
          <StatusBar style="dark" />
          <View onLayout={onLayoutRootView} style={styles.headerContainer}>
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
            {/* <TouchableOpacity>
            <Text style={styles.help}>Need help?</Text>
          </TouchableOpacity> */}
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default KycScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: colors.blackBg
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
