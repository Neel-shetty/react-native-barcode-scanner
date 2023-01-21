import { ImageBackground, KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";
import Banner from "../../components/SubscriptionScreenComponents/Banner";
import Header from "../../components/HomeScreenComponents/Header";
import SearchBar from "../../components/SubscriptionScreenComponents/SearchBar";
import CategoryList from "../../components/SubscriptionScreenComponents/CategoryList";
import PlanView from "../../components/SubscriptionScreenComponents/PlansView";

const SubscriptionScreen = () => {
  return (
    // <View style={styles.root}>
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 70}
      enabled={false}
      style={styles.root}
    >
      <ImageBackground
        source={require("../../../assets/images/bg2.png")}
        resizeMode="cover"
        style={styles.bgImage}
      />
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.headerTitle}>Subscription Plans</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Banner />
      </View>
      <View style={styles.searchContainer}>
        <SearchBar />
      </View>
      <View style={styles.categoryContainer}>
        <CategoryList />
      </View>
      <View style={styles.planConatiner}>
        <PlanView />
      </View>
    </KeyboardAvoidingView>

    // </View>
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
  headerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 15,
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bannerContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryContainer: {
    flex: 1,
    // minHeight: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  planConatiner: {
    flex: 8,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "pink",
  },
});
