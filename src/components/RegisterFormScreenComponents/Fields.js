import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "./Input";
import UploadButton from "./UploadButton";

const formData = [
  {
    placeHolder: "Name",
    type: "input",
    fieldName: "user_name",
  },
   {
    placeHolder: "idk",
    type: "input",
    fieldName: "user_name",
  },
  {
    placeHolder: "Adhaar",
    type: "image",
    fieldName: "adhaar_front",
  },
  {
    placeHolder: "",
    type: "radio",
    Options: ["1", "2"],
  },
];

const Fields = () => {
  return (
    <View style={styles.root}>
      <Text>Fields</Text>
      <FlatList
        data={formData}
        renderItem={({ item }) => {
          return (
            <View>
              {item.type === "input" ? (
                <Input placeholder={item.placeHolder} />
              ) : item.type === "image" ? (
                <UploadButton title={item.placeHolder} type={"adhaar_front"} />
              ) : null}
            </View>
          );
        }}
      />
    </View>
  );
};

export default Fields;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
