import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";

const Banner = () => {
  return (
    <View style={styles.root}>
      <View>
        <View>
          <Text>holder</Text>
        </View>
        <View>
          <Text>holder</Text>
        </View>
      </View>
      <View>
        <Text>Image</Text>
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    height: 200,
    width: layout.widthp,
    backgroundColor:'pink'
  },
});
