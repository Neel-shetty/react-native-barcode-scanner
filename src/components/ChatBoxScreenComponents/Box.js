import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";
import { useNavigation } from "@react-navigation/native";

const Box = ({ name, barcode, category_id }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: "https://media.istockphoto.com/id/1045886560/photo/portrait-of-smiling-handsome-man-in-blue-t-shirt-standing-with-crossed-arms-isolated-on-grey.jpg?s=612x612&w=0&k=20&c=TX1-1UJ3PKonFEmgs_WDZf7wtfqKVMHYjeRaYjaZ1Rc=",
        }}
        style={{
          height: 150,
          width: layout.width,
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
        resizeMode="cover"
      />
      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          {/* <Text style={styles.location}>jakarta, indonesia</Text> */}
          <View style={styles.bottomTextContainer}>
            <View
              style={{
                height: 20,
                width: 20,
                backgroundColor: "red",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "white", fontFamily: "poppins-medium" }}>
                5
              </Text>
            </View>
            <Text style={styles.location}> Messages </Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("InboxScreen", {
                barcode: barcode,
                category_id: category_id,
              });
            }}
          >
            <View style={styles.inboxButton}>
              <Text style={[styles.location, { fontSize: 10 }]}>Inbox</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#efefef",
    width: layout.width,
    height: 250,
    marginBottom: 10,
  },
  name: {
    fontFamily: "poppins-medium",
    fontSize: 14,
    color: "white",
    // fontWeight: "bold",
  },
  location: {
    fontFamily: "poppins-medium",
    fontSize: 12,
    color: "white",
    // fontWeight: "bold",
  },
  textContainer: {
    // width: layout.widthp,
    marginTop: 10,
    flex: 1,
    // backgroundColor: "pink",
  },
  bottomTextContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
    marginTop: 3,
  },
  bottomContainer: {
    flexDirection: "row",
    width: layout.widthp,
    backgroundColor: "black",
    width: layout.width,
    paddingHorizontal: layout.widthp * 0.1,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: "white",
  },
  rightContainer: {
    // backgroundColor: "white",
    flex: 1,
    marginTop: 10,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  inboxButton: {
    height: 30,
    width: 80,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "white",
  },
});
