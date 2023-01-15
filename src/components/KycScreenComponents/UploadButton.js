import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
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

const UploadButton = ({ onPress, title, type }) => {
  const af = useSelector((state) => state.user.adhaarFront);
  const ab = useSelector((state) => state.user.adhaarFront);
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

  if (type === "adhaarFront" || af!==null) {
    return (
      <View style={styles.root}>
        <TouchableOpacity onPress={pickImage}>
          <View style={styles.bg}>
            <View>
              <Text numberOfLines={1} style={styles.title}>
                {af ? `${title} uploaded` : title}
              </Text>
            </View>
            <View>
              <Feather name="upload" size={24} color={colors.gray} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  if (type === "adhaarBack" || ab) {
    return (
      <View style={styles.root}>
        <TouchableOpacity onPress={pickImage}>
          <View style={styles.bg}>
            <View>
              <Text numberOfLines={1} style={styles.title}>
                {ab ? `${title} uploaded` : title}
              </Text>
            </View>
            <View>
              <Feather name="upload" size={24} color={colors.gray} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
};

export default UploadButton;

const styles = StyleSheet.create({
  root: {
    width: layout.widthp,
    alignItems: "flex-start",
    justifyContent: "center",
    height: 68,
    width: layout.widthp,
  },
  bg: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 45,
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
