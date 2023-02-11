import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";
import Header from "../../components/ChatBoxScreenComponents/Header";
import ChatBox from "../../components/ChatBoxScreenComponents/ChatBox";

const ChatBoxScreen = () => {
  return (
    <View style={styles.root}>
      <ImageBackground
        source={require("../../../assets/images/bg2.png")}
        resizeMode="cover"
        style={styles.bgImage}
      />
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.categoryContainer}>
        <ChatBox />
      </View>
    </View>
  );
};

export default ChatBoxScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bgImage: {
    flex: 1,
    width: layout.width,
    height: layout.height,
    position: "absolute",
    top: 0,
    transform: [{ scale: 2 }],
  },
  categoryContainer: {
    flex: 10,
    width: layout.width,
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "coral",
  },
});
