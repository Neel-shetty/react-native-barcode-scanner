import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ showDrawerToggle = true }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={() => {
          if(!showDrawerToggle){
            navigation.goBack()
            return
          }
          navigation.openDrawer();
        }}
      >
        {showDrawerToggle ? (
          <Ionicons name="menu" size={24} color="white" />
        ) : (
          <Ionicons name="chevron-back" size={24} color="white" />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("AllCategoriesScreen");
        }}
      >
        <Ionicons name="notifications" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: layout.widthp,
  },
});
