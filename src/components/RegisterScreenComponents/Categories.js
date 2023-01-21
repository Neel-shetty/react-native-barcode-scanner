import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";
import CategoryButton from "./CategoryButton";

const data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const Categories = () => {
  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Categories</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return <CategoryButton data={item} />;
          }}
          numColumns={4}
        />
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: layout.widthp,
    // backgroundColor: "white",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontFamily: "poppins-semibold",
    fontSize: 18,
  },
  listContainer: {
    flex: 7,
    minHeight: 20,
  },
});
