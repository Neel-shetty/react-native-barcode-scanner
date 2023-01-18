import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";
import Banner from "../../components/SubscriptionScreenComponents/Banner";

const SubscriptionScreen = () => {
  return (
    <View style={styles.root}>
      <ImageBackground
        source={require("../../../assets/images/bg2.png")}
        resizeMode="cover"
        style={styles.bgImage}
      />
      <Text style={styles.headerTitle}>Subscription Plans</Text>
      <Banner />
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
    transform: [{ scale: 1.8 }],
  },
  headerTitle: {
    fontFamily: "poppins-semibold",
    fontSize: 20,
  },
});
