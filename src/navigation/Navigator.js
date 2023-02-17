import { LogBox, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/Main/HomeScreen";
import SignInScreen from "../screens/Login/SignInScreen";
import SignUpScreen from "../screens/Login/SignUpScreen";
import { QueryClient, QueryClientProvider } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import * as SecureStore from "expo-secure-store";
import {
  setFormSubmitted,
  setKycStatus,
  setLoggedIn,
} from "../store/slice/userSlice";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/Main/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../constants/colors";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import OnboardingScreen from "../screens/Login/OnboardingScreen";
import SignInScreen2 from "../screens/Login/SignInScreen2";
import SignUpScreen2 from "../screens/Login/SignUpScreen2";
import KycScreen from "../screens/Login/KycScreen";
import WaitScreen from "../screens/Login/WaitScreen";
import BottomTabBar from "./BottomTabBar";
import SubscriptionScreen from "../screens/Main/SubscriptionScreen";
import RegisterScreen from "../screens/Main/RegisterScreen";
import RegisterFormScreen from "../screens/Main/RegisterFormScreen";
import ChatBoxScreen from "../screens/Main/ChatBoxScreen";
import InboxScreen from "../screens/Main/InboxScreen";
import DmScreen from "../screens/Main/DmScreen";
import PrivacyScreen from "../screens/Main/PrivacyScreen";
import EmailScreen from "../screens/Main/EmailScreen";
import ScanScreen from "../screens/Main/ScanScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Navigator = () => {
  const dispatch = useDispatch();
  LogBox.ignoreAllLogs();

  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    console.log("🚀 ~ file: Navigator.js:21 ~ getValueFor ~ result", result);

    // if (result === null) {
    //   save("isLoggedIn", "false");
    //   // save("token", "false");
    //   dispatch(setLoggedIn(false));
    // }
    if (result === "true") {
      dispatch(setLoggedIn(true));
    }
  }

  const loggedIn = useSelector((state) => state.user.loggedIn);
  const kycDone = useSelector((state) => state.user.kycStatus);
  const formSubmitted = useSelector((state) => state.user.formSubmitted);

  async function checkFormSubmitted() {
    let result = await SecureStore.getItemAsync("formSubmitted");
    if (result === "true") {
      dispatch(setFormSubmitted(true));
    }
  }
  async function checkKycStatus() {
    let result = await SecureStore.getItemAsync("kyc_status");
    if (result === "true") {
      dispatch(setKycStatus(true));
    }
  }
  useEffect(() => {
    // getValueFor("token");
    // if (loggedIn === false) {
    //   save("isLoggedIn", "false");
    // }
    getValueFor("isLoggedIn");
    checkKycStatus();
    checkFormSubmitted();
  }, [loggedIn]);

  const BottomTab = () => {
    return (
      <Tab.Navigator
        tabBar={(props) => {
          return (
            <View
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              <BottomTabBar {...props} />
            </View>
          );
        }}
        screenOptions={{
          // tabBarStyle: {
          //   borderTopRightRadius: 60,
          //   borderTopLeftRadius: 60,
          //   height: 85,
          // },

          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: (props) => (
              <AntDesign
                name="home"
                size={24}
                color={props.focused ? colors.green : "gray"}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarIcon: (props) => (
              <MaterialIcons
                name="person-outline"
                size={27}
                color={props.focused ? colors.green : "gray"}
              />
            ),
            headerShown: false,
            tabBarLabel: "Terms",
          }}
        />
        <Tab.Screen name="Privacy Policy" component={PrivacyScreen} />
        <Tab.Screen
          name="EmailScreen"
          component={EmailScreen}
          options={{
            tabBarIcon: (props) => (
              <Ionicons
                name="scan-sharp"
                size={24}
                color={props.focused ? colors.green : "gray"}
              />
            ),
            headerShown: false,
            tabBarLabel: "Email",
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!loggedIn ? (
          <>
            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
            />
            <Stack.Screen
              name="SignInScreen2"
              component={SignInScreen2}
              options={{ headershown: false }}
            />
            <Stack.Screen
              name="SignUpScreen2"
              component={SignUpScreen2}
              options={{ headershown: false }}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="BottomTab" component={BottomTab} />
            <Stack.Screen
              name="KycScreen"
              component={KycScreen}
              options={{ headershown: false }}
            />
            <Stack.Screen
              name="WaitScreen"
              component={WaitScreen}
              options={{ headershown: false }}
            />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen
              name="SubscriptionScreen"
              component={SubscriptionScreen}
            />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen
              name="RegisterFormScreen"
              component={RegisterFormScreen}
            />
            <Stack.Screen name="InboxScreen" component={InboxScreen} />
            <Stack.Screen name="ChatBoxScreen" component={ChatBoxScreen} />
            <Stack.Screen name="DmScreen" component={DmScreen} />
            <Stack.Screen name="ScanScreen" component={ScanScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
