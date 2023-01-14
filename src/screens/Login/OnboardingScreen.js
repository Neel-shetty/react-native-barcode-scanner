import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useCallback } from "react";
import { layout } from "../../constants/layout";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { colors } from "../../constants/colors";

const OnboardingScreen = () => {
  const { fontScale } = useWindowDimensions(); // import useWindowDimensions()
  const styles = makeStyles(fontScale);
  const [fontsLoaded] = useFonts({
    "poppins-regular": require("../../../assets/fonts/Poppins/Poppins-Regular.ttf"),
    "poppins-medium": require("../../../assets/fonts/Poppins/Poppins-Medium.ttf"),
    "poppins-light": require("../../../assets/fonts/Poppins/Poppins-Light.ttf"),
    "poppins-semibold": require("../../../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "poppins-bold": require("../../../assets/fonts/Poppins/Poppins-Bold.ttf"),
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
    <View style={styles.root} onLayout={onLayoutRootView}>
      <ImageBackground
        source={require("../../../assets/images/loginBg.png")}
        resizeMode="cover"
        style={{
          flex: 1,
          // justifyContent: "center",
          width: layout.width,
          height: layout.height,
          position: "absolute",
        }}
      />
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/images/logoBig.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title1}>SCAN</Text>
        <Text style={styles.title2}>ME</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <View style={styles.buttonView1}>
            <Text style={styles.buttonText1}>Sign In</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.buttonView2}>
            <Text style={styles.buttonText2}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.help}>Need help?</Text>
      </View>
    </View>
  );
};

export default OnboardingScreen;

const makeStyles = (fontScale) =>
  StyleSheet.create({
    root: {
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
    },
    image: {
      height: 180,
      width: 180,
    },
    imageContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    title1: {
      fontFamily: "poppins-bold",
      color: "white",
      fontSize: 45 / fontScale,
      includeFontPadding: false,
      lineHeight: 60,
      textShadowColor: "rgba(0,0,0,0.3)",
      textShadowOffset: { width: 5, height: 3 },
      textShadowRadius: 10,
    },
    title2: {
      fontFamily: "poppins-bold",
      color: "white",
      fontSize: 90 / fontScale,
      includeFontPadding: false,
      lineHeight: 100,
      textShadowColor: "rgba(0,0,0,0.3)",
      textShadowOffset: { width: 5, height: 3 },
      textShadowRadius: 10,
    },
    titleContainer: {
      width: 180,
      height: 150,
      alignItems: "center",
      justifyContent: "flex-start",
      flex: 1,
    },
    buttonView1: {
      height: 60,
      width: 200,
      backgroundColor: "#a777b4",
      borderRadius: 60,
      alignItems: "center",
      justifyContent: "center",
      // shadowColor: "rgba(0,0,0,0.7)",
      shadowOffset: { width: 5, height: 3 },
      shadowRadius: 40,
    },
    buttonView2: {
      height: 60,
      width: 200,
      backgroundColor: "white",
      borderRadius: 60,
      alignItems: "center",
      justifyContent: "center",
      // shadowColor: "rgba(0,0,0,0.7)",
      shadowOffset: { width: 5, height: 3 },
      shadowRadius: 40,
    },
    buttonText1: {
      fontFamily: "poppins-semibold",
      fontSize: 25,
      color: "white",
    },
    buttonText2: {
      fontFamily: "poppins-semibold",
      fontSize: 25,
      color: "black",
    },
    help: {
      fontFamily: "poppins-medium",
      fontSize: 16,
      color: "#3e3e3d",
    },
    buttonContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });
