import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "./Input";
import UploadButton from "./UploadButton";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";

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
  const [loading, setLoading] = useState();
  const [data, setData] = useState();
  // console.log("🚀 ~ file: Categories.js:16 ~ Categories ~ data", data[1].image);
  const route = useRoute();
  console.log(
    "🚀 ~ file: Fields.js:38 ~ Fields ~ route",
    route.params.categoryId
  );

  async function fetchCategories() {
    setLoading(true);
    axios
      .post(
        `http://codelumina.com/project/scanme/api/dyanmic/form?category_id=${route?.params?.categoryId}`
      )
      .then((res) => {
        console.log(res.data);
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
      <Text>Fields</Text>
      <FlatList
        data={data}
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
