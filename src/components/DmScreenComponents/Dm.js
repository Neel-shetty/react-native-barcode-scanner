import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomInput from "./CustomInput";
import TextBox from "./TextBox";
import { layout } from "../../constants/layout";

const data = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    type: "sender",
  },
  {
    text: 2,
    type: "receiver",
  },
  {
    text: 3,
    type: "sender",
  },
  {
    text: 4,
    type: "receiver",
  },
  {
    text: 5,
    type: "sender",
  },
  {
    text: 6,
    type: "sender",
  },
];

const Dm = () => {
  return (
    <View style={styles.root}>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <View style={{ width: layout.width }}>
                <TextBox item={item} type={item.type} />
              </View>
            );
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <CustomInput />
      </View>
    </View>
  );
};

export default Dm;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flex: 1,
    // backgroundColor: "pink"
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    flex: 8,
    // backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    width: layout.width,
  },
});
