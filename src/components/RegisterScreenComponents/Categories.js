import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";
import CategoryButton from "./CategoryButton";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

// const data = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

const Categories = () => {
  const [loading, setLoading] = useState();
  const [data, setData] = useState();
  // console.log("🚀 ~ file: Categories.js:16 ~ Categories ~ data", data[1].image)

  async function fetchCategories() {
    setLoading(true);
    axios
      .post("http://codelumina.com/project/scanme/api/individual/categories")
      .then((res) => {
        // console.log(res.data);
        setData(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          setLoading(false);
        } else if (error.request) {
          console.log(error.request);
          setLoading(false);
        } else {
          console.log(error.message);
          setLoading(false);
        }
      });
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading) return;

  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Categories</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <CategoryButton
                image={item.image}
                title={item.name}
                categoryId={item.id}
              />
            );
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
