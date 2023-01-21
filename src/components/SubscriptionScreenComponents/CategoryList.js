import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Category from "./Category";
import { layout } from "../../constants/layout";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSelectedCategory } from "../../store/slice/PlanSlice";

// const data = [
//   { title: "All", selected: false, key: 1 },
//   { title: "Monthly", selected: false, key: 2 },
//   { title: "Quarterly", selected: false, key: 3 },
//   { title: "Half Yearly", selected: false, key: 4 },
//   { title: "Yearly", selected: false, key: 5 },
// ];

const CategoryList = () => {
  // const [isSelected, setIsSelected] = useState(data);

  const dispatch = useDispatch();
  const isSelected2 = useSelector((state) => state.plan.selectedCategory);
  console.log(
    "🚀 ~ file: CategoryList.js:20 ~ CategoryList ~ isSelected2",
    isSelected2
  );

  console.log(
    "🚀 ~ file: CategoryList.js:16 ~ CategoryList ~ isSelected",
    isSelected2
  );

  function onPress(item) {
    const tempArray = [];
    isSelected2.map((data) => {
      if (data.key === item.key) {
        tempArray.push({ ...data, selected: true });
        dispatch(setCategory(data));
      } else {
        tempArray.push({ ...data, selected: false });
      }
    });
    dispatch(setSelectedCategory(tempArray));
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
              isSelected={isSelected2[index].selected}
            />
          );
        }}
        data={isSelected2}
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
