import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { layout } from "../../constants/layout";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { BASEURL } from "../../constants/apiurl";
import Box from "./Box";

const boxlist = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const ChatBox = () => {
  const [loading, setLoading] = useState();
  // const [data, setData] = useState();
  const [categories, setCategories] = useState();
  console.log("🚀 ~ file: ChatBox.js:16 ~ ChatBox ~ categories", categories);
  // const [select, setSelect] = useState(categories);

  function onSelect(index) {
    console.log("onselect running");
    const tempData = [];
    const newIndex = categories.map((val) => {
      if (val.key === index.key) {
        tempData.push({ ...val, selected: true });
      } else {
        tempData.push({ ...val, selected: false });
      }
    });
    // console.log("🚀 ~ file: ChatBox.js:28 ~ newIndex ~ newIndex", tempData)
    setCategories(tempData);
  }

  async function fetchCategories() {
    setLoading(true);
    axios
      .post(`${BASEURL}/individual/categories`)
      .then((res) => {
        // console.log(res.data);
        const categories = res.data.data;
        let temparr = [];
        for (let i in categories) {
          temparr.push({
            name: categories[i].name,
            selected: i == 0 ? true : false,
            key: categories[i].id,
          });
        }
        console.log(temparr);
        setCategories(temparr);
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
      <View style={styles.categoryBar}>
        <FlatList
          data={categories}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity onPress={() => onSelect(item)}>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: 40,
                    marginHorizontal: 10,
                    alignSelf: "center",
                  }}
                >
                  <Text style={styles.title} numberOfLines={1}>
                    {item.name}
                  </Text>
                </View>
                {categories[index].selected && (
                  <View style={styles.indicator}></View>
                )}
              </TouchableOpacity>
            );
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.boxContainer}>
        <FlatList
          data={boxlist}
          renderItem={({ item }) => {
            return <Box />;
          }}
        />
      </View>
    </View>
  );
};

export default ChatBox;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: layout.width,
  },
  title: {
    color: "white",
    fontFamily: "poppins-medium",
    fontSize: 14,
  },
  categoryBar: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderColor: "#9784ce",
    // backgroundColor: "coral",
  },
  boxContainer: {
    flex: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  indicator: {
    width: 30,
    height: 3,
    backgroundColor: "#004aad",
    borderBottomRightRadius: 3.5,
    borderBottomLeftRadius: 3.5,
    alignSelf: "center",
  },
});
