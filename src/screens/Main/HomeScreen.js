import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../../store/slice/userSlice";
import * as SecureStore from "expo-secure-store";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { layout } from "../../constants/layout";
import Header from "../../components/HomeScreenComponents/Header";
import Profile from "../../components/HomeScreenComponents/Profile";
import MainContainer from "../../components/HomeScreenComponents/MainContainer";
import SecondContainer from "../../components/HomeScreenComponents/SecondContainer";

SplashScreen.preventAutoHideAsync();

const HomeScreen = () => {
  const dispatch = useDispatch();

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
  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

  // function Logout() {
  //   save("isLoggedIn", "false");
  //   dispatch(setLoggedIn(false));
  // }
  return (
    <View onLayout={onLayoutRootView} style={styles.root}>
      <ImageBackground
        source={require("../../../assets/images/bg2.png")}
        resizeMode="cover"
        style={styles.bgImage}
      />
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.profileContainer}>
        <Profile />
      </View>
      <View style={styles.container1}>
        <MainContainer />
      </View>
      <View style={styles.container2}>
        <View
          style={{
            alignItems: "flex-start",
            // backgroundColor: "pink",
            width: layout.widthp,
            paddingLeft: 10,
          }}
        >
          <Text style={styles.access}>Access</Text>
        </View>
        <SecondContainer />
      </View>
      {/* <Button title="Logout" onPress={Logout} /> */}
      <View style={styles.dummy} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
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
    transform: [{ scale: 1.6 }],
  },
  access: {
    fontFamily: "poppins-semibold",
    fontSize: 25,
  },
  headerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  profileContainer: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  container1: {
    flex: 3.5,
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 3.5,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  dummy: {
    // flex: 1,
    minHeight: 85,
  },
});
