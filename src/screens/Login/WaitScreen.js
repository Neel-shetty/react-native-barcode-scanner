import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback } from "react";
import { layout } from "../../constants/layout";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();

const WaitScreen = () => {
  const navigation = useNavigation();
  function onPress() {
    navigation.goBack();
  }

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
    <View style={styles.root} onLayout={onLayoutRootView}>
      <StatusBar style="dark" />
      <ImageBackground
        source={require("../../../assets/images/bg2.png")}
        resizeMode="cover"
        style={styles.bgImage}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Please wait while we complete your KYC</Text>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.buttonView2}>
            <Text style={styles.buttonText2}>Go Back</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WaitScreen;

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
    justifyContent: "flex-start",
    // backgroundColor: "pink",
    flex: 1,
    width: layout.widthp,
    paddingTop: 20,
  },
  buttonView2: {
    height: 60,
    width: 200,
    backgroundColor: "white",
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgba(0,0,0,1)",
    // shadowOffset: { width: 1, height: 3 },
    shadowRadius: 400,
    shadowOpacity: 1,
  },
  buttonText2: {
    fontFamily: "poppins-semibold",
    fontSize: 25,
    color: "black",
  },
});
