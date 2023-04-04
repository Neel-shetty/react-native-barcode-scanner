import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Plan from "./Plan";
import { useNavigation } from "@react-navigation/native";

const PlanItem = ({ title, image, limit, type, plan }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SubscriptionCheckoutScreen", { plan: plan });
        }}
      >
        <Plan title={title} image={image} limit={limit} type={type} />
      </TouchableOpacity>
    </View>
  );
};

export default PlanItem;

const styles = StyleSheet.create({
  root: {
    width: 200,
    height: 250,
    // backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});
