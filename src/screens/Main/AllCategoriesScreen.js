import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../components/AllCategoriesScreenComponents/Header";
import { layout } from "../../constants/layout";
import Categories from "../../components/AllCategoriesScreenComponents/Categories";
import Organizations from "../../components/AllCategoriesScreenComponents/Organizations";
import { colors } from "../../constants/colors";

const AllCategoriesScreen = () => {
  return (
    <View style={styles.root}>
      {/* <ImageBackground
        source={require("../../../assets/images/bg2.png")}
        resizeMode="cover"
        style={styles.bgImage}
      /> */}
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.categories}>
        <Categories />
      </View>
      {/* <View style={styles.organizations}>
      </View> */}
    </View>
  );
};

export default AllCategoriesScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blackBg,
  },
  bgImage: {
    flex: 1,
    width: layout.width,
    height: layout.height,
    position: "absolute",
    top: 0,
    transform: [{ scale: 2 }],
  },
  categories: {
    flex: 10,
  },
  organizations: {
    flex: 5,
  },
  headerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
