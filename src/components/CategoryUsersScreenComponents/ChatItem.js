import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ChatItem = ({ name, receiverId, category_id, image, sender_id }) => {
  console.log("🚀 ~ file: ChatItem.js:6 ~ ChatItem ~ image:", receiverId);
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <TouchableOpacity
        style={styles.root}
        onPress={() => {
          navigation.navigate("QrScreen", {
            receiver_id: receiverId,
            category_id: category_id,
            sender_id: sender_id,
          });
        }}
      >
        <View style={styles.profileContainer}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: image }}
          />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.detailContainer}></View>
      </TouchableOpacity>
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
