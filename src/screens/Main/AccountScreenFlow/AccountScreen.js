import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../../../store/slice/userSlice";
import * as SecureStore from "expo-secure-store";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { layout } from "../../../constants/layout";
import Header from "../../../components/HomeScreenComponents/Header";
import Profile from "../../../components/HomeScreenComponents/Profile";
import SecondContainer from "../../../components/HomeScreenComponents/SecondContainer";
import { StatusBar } from "expo-status-bar";
import ButtonView from "../../../components/AccountScreenComponents/ButtonView";
import Banner from "../../../components/AccountScreenComponents/Banner";
import CategoryInfo from "../../../components/AccountScreenComponents/CategoryInfo";
import CategortInfoList from "../../../components/AccountScreenComponents/CategortInfoList";
import { colors } from "../../../constants/colors";

const AccountScreen = () => {
  return (
    <View style={styles.root}>
      {/* <ImageBackground
        source={require("../../../../assets/images/bg2.png")}
        resizeMode="cover"
        style={styles.bgImage}
      /> */}
      <StatusBar style="dark" />
      <View style={[styles.headerContainer, { marginTop: 20 }]}>
        <Header showDrawerToggle={false} />
      </View>
      <View style={styles.profileContainer}>
        {/* <CategoryInfo /> */}
        <CategortInfoList />
      </View>
      <View style={styles.container1}>
        <ButtonView />
      </View>
      <View style={styles.container2}>
        <View style={{ width: layout.widthp, paddingLeft: 5 }}>
          <Text
            style={[
              styles.headerTitle,
              { fontSize: 15, fontFamily: "poppins-medium" },
            ]}
          >
            Promotional Banners
          </Text>
        </View>
        <Banner />
      </View>
      <View style={styles.dummy} />
    </View>
  );
};

export default { component: AccountScreen, name: "AccountScreen" };

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blackBg,
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
    marginTop: 10,
  },
  profileContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
    // backgroundColor: "pink",
  },
  container1: {
    flex: 4.5,
    alignItems: "center",
    justifyContent: "center",
    // maxHeight: 220,
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
  title: {
    fontFamily: "poppins-semibold",
    fontSize: 28,
    color: "white",
  },
  headerTitle: {
    fontFamily: "poppins-semibold",
    fontSize: 18,
    color: "white",
  },
});
