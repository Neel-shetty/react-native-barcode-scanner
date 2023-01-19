import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";
import Banner from "../../components/SubscriptionScreenComponents/Banner";
import Header from "../../components/HomeScreenComponents/Header";
import SearchBar from "../../components/SubscriptionScreenComponents/SearchBar";
import CategoryList from "../../components/SubscriptionScreenComponents/CategoryList";
import PlanView from "../../components/SubscriptionScreenComponents/PlansView";

const SubscriptionScreen = () => {
  return (
    <View style={styles.root}>
      <ImageBackground
        source={require("../../../assets/images/bg2.png")}
        resizeMode="cover"
        style={styles.bgImage}
      />
      <Header />
      <Text style={styles.headerTitle}>Subscription Plans</Text>
      <Banner />
      <SearchBar />
      <CategoryList />
      <PlanView />
    </View>
  );
};

export default SubscriptionScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bgImage: {
    flex: 1,
    width: layout.width,
    height: layout.height,
    position: "absolute",
    top: 0,
    transform: [{ scale: 2 }],
  },
  headerTitle: {
    fontFamily: "poppins-semibold",
    fontSize: 20,
  },
});
