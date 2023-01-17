import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SecondContainer = () => {
  const navigation = useNavigation();
  function KycButton() {
    navigation.navigate("KycScreen");
  }
  return (
    <View style={styles.root}>
      <View style={styles.itemContainer}>
        <View style={{ flex: 1 }}>
          <LinearGradient
            colors={["#8c52ff", "#c471ed"]}
            style={styles.iconContainer}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <FontAwesome
              name="id-card"
              size={27}
              color="white"
              style={{ transform: [{ rotate: "-45deg" }] }}
            />
          </LinearGradient>
        </View>
        <View style={{ flex: 2 }}>
          <TouchableOpacity onPress={KycButton}>
            <Text style={styles.title}>KYC</Text>
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
              name="star"
              size={34}
              color="white"
              style={{ transform: [{ rotate: "-45deg" }] }}
            />
          </LinearGradient>
        </View>
        <View style={{ flex: 2 }}>
          <TouchableOpacity>
            <Text style={styles.title}>Subscription</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SecondContainer;

const styles = StyleSheet.create({
  root: {
    width: layout.widthp,
    backgroundColor: "white",
    height: 150,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 20,
    // flexDirection: "row",
    paddingHorizontal: 40,
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
