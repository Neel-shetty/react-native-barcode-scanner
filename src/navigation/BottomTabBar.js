import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { layout } from "../constants/layout";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { Foundation } from "@expo/vector-icons";

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
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const iconColor = isFocused ? "white" : colors.gray;
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

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

                {label === "HomeScreen" ? (
                  <Foundation name="page" size={24} color={iconColor} />
                ) : (
                  <Foundation name="page" size={24} color={iconColor} />
                )}
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
