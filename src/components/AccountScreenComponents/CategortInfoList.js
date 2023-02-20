import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import CategoryInfo from "./CategoryInfo";
import { BASEURL } from "../../constants/apiurl";
import { useEffect } from "react";
import axios from "axios";
import { Entypo } from "@expo/vector-icons";
import { layout } from "../../constants/layout";

const CategortInfoList = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState();
  const [currentCategory, setCurrentCategory] = useState();
  const [counter, setCounter] = useState(0);

  async function fetchCategories() {
    setLoading(true);
    axios
      .post(`${BASEURL}/individual/categories`)
      .then(async (res) => {
        // console.log(res.data);
        const categories = res.data.data;
        console.log(
          "🚀 ~ file: ChatBox.js:48 ~ .then ~ categories",
          categories
        );
        setCategories(categories);
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

  useEffect(() => {
    if (categories) setCategory();
  }, [counter, categories]);

  function setCategory() {
    const currCategory = categories[counter];
    setCurrentCategory(currCategory);
  }

  // if (loading) return <ActivityIndicator size={"large"} color={"purple"} />;

  return (
    <View style={styles.root}>
      <View
        style={{
          marginBottom: 10,
          flexDirection: "row",
          alignItems: "center",
          width: layout.widthp,
          justifyContent: "space-between",
          marginTop: 50,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            if (counter !== 0) setCounter(counter - 1);
          }}
        >
          <Entypo name="chevron-left" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>My Account</Text>
        <TouchableOpacity
          onPress={() => {
            if (counter !== categories.length - 1) setCounter(counter + 1);
          }}
        >
          <Entypo name="chevron-right" size={28} color="white" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <CategoryInfo category={currentCategory} loading={loading} />
      </TouchableOpacity>
    </View>
  );
};

export default CategortInfoList;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "poppins-semibold",
    fontSize: 28,
    color: "white",
  },
});
