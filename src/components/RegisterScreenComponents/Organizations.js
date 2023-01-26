import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";
import OrganizationButton from "./OrganizationButton";
import { Octicons } from "@expo/vector-icons";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Organizations = () => {
  const [loading, setLoading] = useState();
  const [data, setData] = useState();
  // console.log("🚀 ~ file: Categories.js:16 ~ Categories ~ data", data[1].image);

  async function fetchCategories() {
    setLoading(true);
    axios
      .post("http://codelumina.com/project/scanme/api/organization/categories")
      .then((res) => {
        // console.log(res.data.data);
        setData(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error.response) {
          // console.log(error.response.data);
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
        <Text style={styles.title}>Organizations</Text>
        <View style={{ paddingLeft: 10 }}>
          <Octicons name="arrow-down" size={18} color="black" />
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return <OrganizationButton title={item.name} image={item.image} />;
          }}
          numColumns={3}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Organizations;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: layout.widthp,
    // backgroundColor: "white",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
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
