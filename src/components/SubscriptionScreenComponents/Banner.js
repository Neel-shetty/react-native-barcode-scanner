import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";

const Banner = () => {
  return (
    <View style={styles.root}>
      <View>
        <View style={{flex:2}}>
          <Text>Enroll your Organization, Agency or Company to get unlimited access and register unlimited vehicles, employees, users</Text>
        </View>
        <View>
        <View style={styles.buttonContainer}>
          <Text>click here</Text>
        </View>
        </View>
      </View>
      <View style={{flex:1}}>
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
    backgroundColor:'#c471ed',
    borderRadius:20
  },
  buttonContainer:{
    alignItems:'center',
      justifyContent: 'center',
      backgroundColor:'red',
      height: 50,
      width:150,
      borderRadius:25,
  }
});
