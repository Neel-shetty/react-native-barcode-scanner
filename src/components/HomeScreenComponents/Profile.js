import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaKLOovEiY0ZfP-ldZA5yua33jd8ZEeOzynQ&usqp=CAU",
        }}
        style={styles.image}
      />
      <Text style={styles.name}>Daniel Gallego eas</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("EditProfileScreen")}
      >
        {/* <LinearGradient
          colors={["white", "#c471ed"]}
          style={styles.buttonContainer}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        > */}
        <Text style={styles.edit}>Edit Profile</Text>
        {/* </LinearGradient> */}
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
    // flex: 1,
  },
  image: {
    height: 145,
    width: 145,
    borderRadius: 100,
  },
  name: {
    fontFamily: "poppins-semibold",
    fontSize: 25,
    color: "white",
  },
  buttonContainer: {
    width: 150,
    height: 35,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "white",
  },
  edit: {
    fontFamily: "poppins-medium",
    fontSize: 16,
    color: "white",
  },
});
