import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../../components/CategoryUsersScreenComponents/Header";
import { layout } from "../../../constants/layout";
import ChatItem from "../../../components/CategoryUsersScreenComponents/ChatItem";
import ChatList from "../../../components/CategoryUsersScreenComponents/ChatList";
import { colors } from "../../../constants/colors";

const CategoryUsersScreen = () => {
  return (
    <View style={styles.root}>
      {/* <ImageBackground
        source={require("../../../../assets/images/bg2.png")}
        resizeMode="cover"
        style={styles.bgImage}
      /> */}
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.chatlist}>
        {/* <ChatItem /> */}
        <ChatList />
      </View>
    </View>
  );
};

export default CategoryUsersScreen;

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
  chatlist: {
    alignItems: "center",
    justifyContent: "center",
    flex: 11,
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
