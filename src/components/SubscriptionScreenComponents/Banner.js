import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";

const Banner = () => {
  return (
    <View style={styles.root}>
      <View
        style={{
          flex: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flex: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.text}>
            Enroll your Organization, Agency or Company to get unlimited access
            and register unlimited vehicles, employees, users
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>click here</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          // backgroundColor: "pink",
          height: 150,
          alignItems: "flex-start",
          justifyContent: "flex-end",
        }}
      >
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
    height: 150,
    width: layout.widthp,
    backgroundColor: "#c471ed",
    borderRadius: 20,
    paddingLeft: 20,
    overflow: "hidden",
    paddingTop: 10,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    height: 30,
    width: 80,
    borderRadius: 25,
  },
  text: {
    fontFamily: "poppins-regular",
    fontSize: 13,
    color: "white",
    // textAlign:'center'
  },
  image: {
    width: 120,
    height: 120,
    transform: [{ translateX: -25 }, { translateY: -5 }],
  },
  buttonText: {
    fontFamily: "poppins-semibold",
    color: "white",
    fontSize: 12,
  },
});
