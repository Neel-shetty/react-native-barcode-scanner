import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/Main/HomeScreen";
import SignInScreen from "../screens/Login/SignInScreen";
import SignUpScreen from "../screens/Login/SignUpScreen";
import { QueryClient, QueryClientProvider } from "react-query";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

// const loggedIn  = false

const Navigator = () => {
  const loggedIn = useSelector((state) => state.user.loggedIn);
<<<<<<< HEAD
  console.log("🚀 ~ file: Navigator.js:17 ~ Navigator ~ loggedIn", loggedIn);
=======
>>>>>>> fix
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
