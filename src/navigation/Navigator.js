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

const Stack = createNativeStackNavigator();

// const loggedIn  = false

const Navigator = () => {
  const dispatch = useDispatch();
  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    console.log("🚀 ~ file: Navigator.js:21 ~ getValueFor ~ result", result) 
    if (result === "true") {
      dispatch(setLoggedIn(true));
    }
  }
  const loggedIn = useSelector((state) => state.user.loggedIn);
  useEffect(() => {
    getValueFor("loggedIn");
  }, [loggedIn]);

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
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
    // </QueryClientProvider>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
