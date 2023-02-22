import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { layout } from "../constants/layout";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { Foundation } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import AccountScreen from "../screens/Main/AccountScreenFlow/AccountScreen";

const BottomTabBar = ({ state, descriptors, navigation }) => {
  return (
    // <View style={styles.mainContainer}>
    <LinearGradient
      colors={["#c471ed", "#8c52ff"]}
      style={styles.mainContainer}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      {state.routes.map((route, index) => {
        const { options, tabBarLabel } = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const iconColor = isFocused ? "black" : "white";
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        if (label === AccountScreen.name) {
          return;
        }
        if (label !== "DrawerNavigator")
          return (
            <View key={index} style={styles.mainItemContainer}>
              <Pressable
                onPress={onPress}
                // style={{
                //   backgroundColor: isFocused ? colors.green : colors.gray,
                //   borderRadius: 20,
                // }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                    padding: 15,
                  }}
                >
                  {/* <NavigationIcon route={label} isFocused={isFocused} /> */}
                  {label === "Terms" ? (
                    <Foundation name="page" size={34} color={iconColor} />
                  ) : label === "Privacy Policy" ? (
                    <MaterialIcons
                      name="privacy-tip"
                      size={34}
                      color={iconColor}
                    />
                  ) : (
                    <MaterialIcons name="email" size={34} color={iconColor} />
                  )}
                  <Text
                    style={{ color: iconColor, fontFamily: "poppins-regular" }}
                  >
                    {label}
                  </Text>
                </View>
              </Pressable>
            </View>
          );
      })}
    </LinearGradient>
    // </View>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({
  mainContainer: {
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    height: 85,
    // backgroundColor: "pink",
    flexDirection: "row",
    overflow: "hidden",
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    // borderRadius: 1,
    // borderColor: "#333B42",
  },
});
