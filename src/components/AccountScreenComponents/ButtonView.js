import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { layout } from "../../constants/layout";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const ButtonView = () => {
  const navigation = useNavigation();

  const data = [
    {
      name: "Chat",
      onPress: function () {
        navigation.navigate("ChatBoxScreen");
      },
      icon: (
        <Entypo
          name="chat"
          size={30}
          color="white"
          // style={{ transform: [{ rotate: "-45deg" }] }}
        />
      ),
    },
    {
      name: "Scanner",
      onPress: function () {
        navigation.navigate("ScanScreen");
      },
      icon: (
        <AntDesign
          name="scan1"
          size={70}
          color="white"
          // style={{ transform: [{ rotate: "-45deg" }] }}
        />
      ),
    },
    {
      name: "Help",
      onPress: function () {
        navigation.navigate("HelpScreen");
      },
      icon: (
        <MaterialIcons
          name="info"
          size={30}
          color="white"
          // style={{ transform: [{ rotate: "-45deg" }] }}
        />
      ),
    },
  ];

  return (
    <View style={styles.root}>
      {data.map((item) => {
        console.log("🚀 ~ file: ButtonView.js:11 ~ .map ~ item", item);
        return (
          <TouchableOpacity onPress={item.onPress}>
            <View style={styles.optionBox} key={item}>
              <View
                style={{
                  alignItems: "center",
                  // justifyContent: "flex-end",
                  alignSelf: "center",
                  marginTop: 10,
                  // backgroundColor: "white",
                }}
              >
                {/* <LinearGradient
                  colors={["#8c52ff", "#c471ed"]}
                  style={styles.iconContainer}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                > */}
                {item.icon}
                {/* <MaterialCommunityIcons
                    name="account"
                    size={34}
                    color="white"
                    style={{ transform: [{ rotate: "-45deg" }] }}
                  /> */}
                {/* </LinearGradient> */}
                <View style={{ marginTop: 10 }} />
                <Text style={styles.subtitle}>{item?.name}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ButtonView;

const styles = StyleSheet.create({
  root: {
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row",
    // backgroundColor: "white",
  },
  optionBox: {
    height: 100,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    width: layout.width * 0.25,
    marginHorizontal: 15,
    borderRadius: 10,
    // elevation: 20,
  },
  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 8,
    // transform: [{ rotate: "45deg" }],
    alignItems: "center",
    justifyContent: "center",
  },
  subtitle: {
    fontFamily: "poppins-medium",
    fontSize: 16,
    color: "white",
  },
});
