import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ChatItem = () => {
  return (
    <View style={styles.root}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{
            uri: "https://media.istockphoto.com/id/1045886560/photo/portrait-of-smiling-handsome-man-in-blue-t-shirt-standing-with-crossed-arms-isolated-on-grey.jpg?s=612x612&w=0&k=20&c=TX1-1UJ3PKonFEmgs_WDZf7wtfqKVMHYjeRaYjaZ1Rc=",
          }}
        />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>Test</Text>
        <Text numberOfLines={1} style={styles.preview}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.preview}>Now</Text>
        <View
          style={{
            height: 20,
            width: 20,
            backgroundColor: "white",
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>2</Text>
        </View>
      </View>
    </View>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  profileContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  nameContainer: {
    // alignItems: "center",
    justifyContent: "center",
    flex: 2,
  },
  detailContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  name: {
    fontFamily: "poppins-semibold",
    fontSize: 16,
    color: "white",
  },
  preview: {
    fontFamily: "poppins-regular",
    fontSize: 12,
    color: "white",
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});
