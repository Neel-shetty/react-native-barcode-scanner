import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Category from "./Category";
import { layout } from "../../constants/layout";

const data = [
  { title: "All", selected: false, key: 1 },
  { title: "Monthly", selected: false, key: 2 },
  { title: "Quarterly", selected: false, key: 3 },
  { title: "Half Yearly", selected: false, key: 4 },
  { title: "Yearly", selected: false, key: 5 },
];

const CategoryList = () => {
  const [isSelected, setIsSelected] = useState(data);
  console.log(
    "🚀 ~ file: CategoryList.js:16 ~ CategoryList ~ isSelected",
    isSelected
  );

  function onPress(item) {
    const tempArray = [];
    // function defaultTrue() {
    //   const tmp = [];
    //   if (
    //     !isSelected[1] &&
    //     !isSelected[2] &&
    //     !isSelected[3] &&
    //     !isSelected[4] &&
    //     !isSelected[0]
    //   ) {
    //     data.
    //   }
    // }
    isSelected.map((data) => {
      if (data.key === item.key) {
        tempArray.push({ ...data, selected: true });
      } else {
        tempArray.push({ ...data, selected: false });
      }
    });
    setIsSelected(tempArray);
  }

  return (
    <View style={styles.root}>
      <FlatList
        renderItem={({ item, index }) => {
          return (
            <Category
              title={item.title}
              onPress={() => {
                onPress(item);
              }}
              isSelected={isSelected[index].selected}
            />
          );
        }}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  root: {
    width: layout.widthp + 10,
    paddingHorizontal: 5,
    // paddingVertical: 10,
  },
});
