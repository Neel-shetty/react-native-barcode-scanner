import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";

const Banner = () => {
  return (
    <View style={styles.root}>
      <View style={{ flex: 3 }}>
        <View>
          <Text style={styles.text}>
            Enroll your Organization, Agency or Company to get unlimited access
            and register unlimited vehicles, employees, users
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <View style={styles.buttonContainer}>
              <Text>click here</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "flex-start" }}>
        <Image
          source={require("../../../assets/images/phone.png")}
          style={styles.image}
        />
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
    backgroundColor: "#c471ed",
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    height: 50,
    width: 150,
    borderRadius: 25,
  },
  text: {
    fontFamily: "poppins-regular",
    fontSize: 14,
    color: "white",
    // textAlign:'center'
  },
  image: {
    width: 200,
    height: 200,
  },
});
