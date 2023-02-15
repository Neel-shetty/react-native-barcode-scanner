import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { layout } from "../../constants/layout";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";
import { useState } from "react";

const Header = ({ id }) => {
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => {
    setVisible(true);
  };

  const navigation = useNavigation();

  function onPress() {
    // save("isLoggedIn", "false");
    // dispatch(setLoggedIn(false));
    navigation.goBack();
  }
  return (
    <View style={styles.root}>
      <View style={styles.backContainer}>
        <TouchableOpacity onPress={onPress}>
          <Ionicons
            name="chevron-back"
            size={24}
            color="black"
            style={{
              backgroundColor: "white",
              borderRadius: 100,
              height: 30,
              width: 30,
              alignItems: "center",
              justifyContent: "center",
              paddingTop: 3,
            }}
          />
        </TouchableOpacity>
        {/* <Text style={styles.title}>Name</Text>
        <View style={{ height: 30, width: 30 }} /> */}
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://randomuser.me/api/portraits/thumb/men/1.jpg",
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.number}>
            9945367780{"\n"}
            <Text style={styles.online}>Online</Text>
          </Text>
        </View>
      </View>
      <View style={styles.menuContainer}>
        <Menu
          anchor={
            <TouchableOpacity onPress={showMenu}>
              <Entypo name="dots-three-vertical" size={22} color="white" />
            </TouchableOpacity>
          }
          visible={visible}
          onRequestClose={hideMenu}
        >
          <MenuItem
            onPress={() => {
              console.log("report");
              hideMenu();
            }}
          >
            <Text style={styles.menutext}>Report</Text>
          </MenuItem>
        </Menu>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  root: {
    width: layout.widthp,
    alignSelf: "center",
    justifyContent: "space-between",
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    // backgroundColor: "pink",
  },
  title: {
    fontFamily: "poppins-semibold",
    fontSize: 20,
    color: "white",
  },
  backContainer: {
    flex: 1,
  },
  profileContainer: {
    flex: 8,
    // backgroundColor: "violet",
    flexDirection: "row",
    alignItems: "center",
  },
  menuContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  imageContainer: {
    paddingHorizontal: 10,
    // backgroundColor: "coral",
  },
  textContainer: {
    paddingLeft: 5,
    justifyContent: "center",
    // paddingVertical: 5,
  },
  number: {
    fontFamily: "poppins-semibold",
    fontSize: 14,
  },
  online: {
    fontFamily: "poppins-medium",
    color: "white",
    fontSize: 12,
  },
  menutext: {
    fontFamily: "poppins-medium",
  },
});
