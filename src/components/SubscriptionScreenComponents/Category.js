import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Category = ({ title, onPress, isSelected }) => {
  console.log("🚀 ~ file: Category.js:11 ~ Category ~ isSelected", isSelected);
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={
          isSelected
            ? [
                styles.root,
                {
                  backgroundColor: "black",
                  borderWidth: 1,
                  borderColor: "white",
                  borderRadius: 20,
                },
              ]
            : styles.root
        }
      >
        <Text
          style={isSelected ? [styles.title, { color: "white" }] : styles.title}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  root: {
    height: 40,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 10,
    marginLeft: 1,
  },
  title: {
    fontFamily: "poppins-semibold",
    color: "white",
    fontSize: 10,
  },
});
