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

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Navigator = () => {
  const dispatch = useDispatch();
  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    console.log("🚀 ~ file: Navigator.js:21 ~ getValueFor ~ result", result);
    if (result !== "false") {
      dispatch(setLoggedIn(true));
    }
  }
  const loggedIn = useSelector((state) => state.user.loggedIn);
  useEffect(() => {
    getValueFor("loggedIn");
    getValueFor("token");
  }, [loggedIn]);

  const BottomTab = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
      </Tab.Navigator>
    );
  };

  return (
    // <QueryClientProvider client={QueryClient}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!loggedIn ? (
          <>
            <Stack.Screen
              name="SignInScreen"
              component={SignInScreen}
              options={{ headershown: false }}
            />
            <Stack.Screen
              name="SignUpScreen"
              component={SignUpScreen}
              options={{ headershown: false }}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="Bottomtab" component={BottomTab} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
    // </QueryClientProvider>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
