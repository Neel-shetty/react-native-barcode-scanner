import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";
import { useNavigation } from "@react-navigation/native";

const OrderItem = ({ order }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.root}
      onPress={() => {
        navigation.navigate("OrderQRFormScreen", {
          orderId: order.id,
          amount: order.price,
        });
      }}
    >
      <View style={{ flex: 3, height: 110 }}>
        <Text style={styles.text}>Quantity - {order.qty}</Text>
        <Text numberOfLines={3} style={styles.description}>
          {order.description}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "flex-end",
          // backgroundColor: "pink",
          height: 110,
        }}
      >
        <Text style={styles.text}>₹{order.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "space-between",
    height: 150,
    width: layout.widthp,
    // backgroundColor:
    backgroundColor: "black",
    borderRadius: 20,
    marginBottom: 20,
    flexDirection: "row",
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "white",
  },
  text: {
    fontFamily: "poppins-semibold",
    fontSize: 20,
    color: "white",
  },
  description: {
    fontFamily: "poppins-medium",
    fontSize: 16,
    color: "white",
  },
});
