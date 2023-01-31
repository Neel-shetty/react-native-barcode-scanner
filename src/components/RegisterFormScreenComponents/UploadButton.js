import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";
import { colors } from "../../constants/colors";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import {
  setAdhaarBack,
  setAdhaarFront,
  setPanCard,
} from "../../store/slice/userSlice";
import { useState } from "react";

const UploadButton = ({ onPress, title, type }) => {
  const [image, setImage] = useState(null);
  console.log("🚀 ~ file: UploadButton.js:17 ~ UploadButton ~ image", image);
  const af = useSelector((state) => state.user.adhaarFront);
  // console.log("🚀 ~ file: UploadButton.js:16 ~ UploadButton ~ af", af)
  const ab = useSelector((state) => state.user.adhaarBack);
  // console.log("🚀 ~ file: UploadButton.js:18 ~ UploadButton ~ ab", ab)
  const pc = useSelector((state) => state.user.panCard);
  // console.log("🚀 ~ file: UploadButton.js:20 ~ UploadButton ~ pc", pc)
  const dispatch = useDispatch();

  async function pickImage() {
    // No permissions request is necessary for launching the af library
    console.log("test");
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result.assets[0].uri);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      if (type === "adhaarFront") {
        dispatch(setAdhaarFront(result.assets[0]));
      }
      if (type === "adhaarBack") {
        dispatch(setAdhaarBack(result.assets[0]));
      }
      if (type === "panCard") {
        dispatch(setPanCard(result.assets[0]));
      }
    }
  }

  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={pickImage}>
        <View style={styles.bg}>
          <Image
            source={{
              uri: image
                ? image
                : "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg",
            }}
            style={{ width: 50, height: 50, borderRadius: 30 }}
          />
          <View>
            <Text
              numberOfLines={1}
              style={image ? [styles.title, { color: "black" }] : styles.title}
            >
              {af ? `${title} uploaded` : title}
            </Text>
          </View>
          <View>
            <Feather name="upload" size={24} color={colors.gray} />
          </View>
          {/* <View>
            <Text>test</Text>
          </View> */}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default UploadButton;

const styles = StyleSheet.create({
  root: {
    width: layout.widthp,
    alignItems: "flex-start",
    justifyContent: "center",
    height: 100,
    width: layout.widthp,
  },
  bg: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 70,
    alignItems: "center",
    justifyContent: "space-between",
    width: layout.widthp,
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: "inter-semibold",
    fontSize: 16,
    color: "rgba(181,181,181,255)",
    // paddingLeft: 10,
    // color:colors.gray
  },
});
