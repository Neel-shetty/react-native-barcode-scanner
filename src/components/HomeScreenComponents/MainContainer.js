import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";
import { Foundation } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const MainContainer = () => {
  return (
    <View style={styles.root}>
      {/* <TouchableOpacity> */}
      <View style={styles.itemContainer}>
        <View style={{ flex: 1 }}>
          <LinearGradient
            colors={["#8c52ff", "#c471ed"]}
            style={styles.iconContainer}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <MaterialCommunityIcons
              name="account"
              size={34}
              color="white"
              style={{ transform: [{ rotate: "-45deg" }] }}
            />
            {/* <Foundation
              name="page"
              size={34}
              color={"white"}
              style={{ transform: [{ rotate: "-45deg" }] }}
            /> */}
          </LinearGradient>
        </View>
        <View style={{ flex: 2 }}>
          <TouchableOpacity>
            <Text style={styles.title}>My Account</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* </TouchableOpacity> */}
      <View style={styles.itemContainer}>
        <View style={{ flex: 1 }}>
          <LinearGradient
            colors={["#8c52ff", "#c471ed"]}
            style={styles.iconContainer}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <FontAwesome5
              name="file-signature"
              size={28}
              color="white"
              style={{ transform: [{ rotate: "-45deg" }, { translateX: 5 }] }}
            />
            {/* <Foundation
              name="page"
              size={34}
              color={"black"}
              style={{ transform: [{ rotate: "-45deg" }] }}
            /> */}
          </LinearGradient>
        </View>
        <View style={{ flex: 2 }}>
          <TouchableOpacity>
            <Text style={styles.title}>Register Yourself</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <View style={{ flex: 1 }}>
          <LinearGradient
            colors={["#8c52ff", "#c471ed"]}
            style={styles.iconContainer}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <AntDesign
              name="scan1"
              size={30}
              color="white"
              style={{ transform: [{ rotate: "-45deg" }] }}
            />
            {/* <Foundation
              name="page"
              size={34}
              color={"black"}
              style={{ transform: [{ rotate: "-45deg" }] }}
            /> */}
          </LinearGradient>
        </View>
        <View style={{ flex: 2 }}>
          <TouchableOpacity>
            <Text style={styles.title}>My Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MainContainer;

const styles = StyleSheet.create({
  root: {
    width: layout.widthp,
    backgroundColor: "white",
    height: 200,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 20,
    // flexDirection: "row",
    paddingHorizontal: 20,
  },
  itemContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  title: {
    fontFamily: "poppins-regular",
    fontSize: 20,
  },
  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 8,
    transform: [{ rotate: "45deg" }],
    alignItems: "center",
    justifyContent: "center",
  },
});
