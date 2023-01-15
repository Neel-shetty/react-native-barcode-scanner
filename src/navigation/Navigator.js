import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/Main/HomeScreen";
import SignInScreen from "../screens/Login/SignInScreen";
import SignUpScreen from "../screens/Login/SignUpScreen";
import { QueryClient, QueryClientProvider } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import * as SecureStore from "expo-secure-store";
import { setLoggedIn } from "../store/slice/userSlice";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/Main/ProfileScreen";
import ChatScreen from "../screens/Main/ChatScreen";
import ScanScreen from "../screens/Main/ScanScreen";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../constants/colors";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import OnboardingScreen from "../screens/Login/OnboardingScreen";
import SignInScreen2 from "../screens/Login/SignInScreen2";
import SignUpScreen2 from "../screens/Login/SignUpScreen2";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Navigator = () => {
  const dispatch = useDispatch();

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
  useEffect(() => {
    // getValueFor("token");
    // if (loggedIn === false) {
    //   save("isLoggedIn", "false");
    // }
    getValueFor("isLoggedIn");
  }, [loggedIn]);

  const BottomTab = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { borderTopRightRadius: 12, borderTopLeftRadius: 12 },
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
          }}
        />
        <Tab.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{
            tabBarIcon: (props) => (
              <MaterialCommunityIcons
                name="message-outline"
                size={24}
                color={props.focused ? colors.green : "gray"}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="ScanScreen"
          component={ScanScreen}
          options={{
            tabBarIcon: (props) => (
              <Ionicons
                name="scan-sharp"
                size={24}
                color={props.focused ? colors.green : "gray"}
              />
            ),
            headerShown: false,
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
              name="SignInScreen"
              component={SignInScreen}
              options={{ headershown: false }}
            />
            <Stack.Screen
              name="SignInScreen2"
              component={SignInScreen2}
              options={{ headershown: false }}
            />
            <Stack.Screen
              name="SignUpScreen"
              component={SignUpScreen}
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
