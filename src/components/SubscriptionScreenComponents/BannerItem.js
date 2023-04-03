import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";

const BannerItem = ({ description, image }) => {
  return (
    <View style={styles.root}>
      <View
        style={{
          flex: 3,
          alignItems: "center",
          // backgroundColor: "pink",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flex: 2,
            alignItems: "center",
            justifyContent: "center",
            width: layout.widthp / 2,
            alignSelf: "flex-start",
          }}
        >
          <Text style={styles.text}>
            {description}
            {/* Enroll your Organization, Agency or Company to get unlimited access
            and register unlimited vehicles, employees, users */}
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
          flex: 2,
          height: 150,
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: "#ff002b",
          maxWidth: 150,
        }}
      >
        <Image source={{ uri: image }} style={styles.image} />
      </View>
    </View>
  );
};

export default BannerItem;

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
    textAlign: "left",
  },
  image: {
    width: 120,
    height: 120,
    // transform: [{ translateX: -25 }, { translateY: -5 }],
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: "poppins-semibold",
    color: "white",
    fontSize: 12,
  },
});
