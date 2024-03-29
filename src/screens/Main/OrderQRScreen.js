import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { layout } from "../../constants/layout";
import { useQuery } from "react-query";
import axios from "axios";
import { BASEURL } from "../../constants/apiurl";
import Header from "../../components/OrderQRScreenComponents/Header";
import OrderItem from "../../components/OrderQRScreenComponents/OrderItem";
import { colors } from "../../constants/colors";

const OrderQRScreen = () => {
  const { data, isLoading, error } = useQuery("fetch_order_qty", async () =>
    axios.post(`${BASEURL}/order_qty`)
  );
  // console.log(
  //   "🚀 ~ file: OrderQRScreen.js:11 ~ OrderQRScreen ~ data:",
  //   data?.data?.data
  // );

  if (!data || isLoading || error) {
    return null;
  }

  return (
    <View style={styles.root}>
      {/* <ImageBackground
        source={require("../../../assets/images/bg2.png")}
        resizeMode="cover"
        style={styles.bgImage}
      /> */}
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <View style={styles.headerContainer}>
            <Header title={"Order Quantity"} />
          </View>
          <View style={{ flex: 8 }}>
            <FlatList
              data={data?.data?.data ? data?.data?.data : []}
              renderItem={({ item, index }) => {
                return <OrderItem order={item} />;
              }}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default OrderQRScreen;

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
  headerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "pink",
  },
});
