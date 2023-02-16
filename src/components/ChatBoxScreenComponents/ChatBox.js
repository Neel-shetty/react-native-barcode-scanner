import {
  Alert,
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
import * as SecureStore from "expo-secure-store";

const boxlist = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const ChatBox = () => {
  const [loading, setLoading] = useState();
  // const [data, setData] = useState();
  const [categories, setCategories] = useState();
  const [users, setUsers] = useState([]);
  // console.log("🚀 ~ file: ChatBox.js:16 ~ ChatBox ~ categories", categories);
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
      .then(async (res) => {
        // console.log(res.data);
        const categories = res.data.data;
        console.log("🚀 ~ file: ChatBox.js:48 ~ .then ~ categories", categories)
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
        await fetchUsers();
        // setLoading(false);
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

  async function fetchUsers() {
    const id = await SecureStore.getItemAsync("id");
    console.log("🚀 ~ file: ChatBox.js:75 ~ fetchUsers ~ id", id);
    var category_id;
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].selected) {
        category_id = categories[i].key;
      }
    }
    console.log(
      "🚀 ~ file: ChatBox.js:116 ~ fetchUsers ~ category_id",
      category_id
    );
    axios
      .post(`${BASEURL}/my/category-wise/users`, {
        user_id: id,
        category_id: category_id,
      })
      .then((res) => {
        console.log("response data ---------- ", res.data);
        setUsers(res.data.data);
      })
      .catch((error) => {
        console.log("error");
        if (error.response) {
          console.log(error.response.data);
          if (error.response.data.status == 0) {
            setUsers([]);
            Alert.alert('Failed',error.response.data.message)
          }
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
    fetchUsers();
  }, [categories]);

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
          data={users}
          renderItem={({ item }) => {
            var category_id;
            for (let i = 0; i < categories.length; i++) {
              if (categories[i].selected) {
                category_id = categories[i].key;
              }
            }
            return (
              <Box
                name={item.name}
                barcode={item.barcode}
                category_id={category_id}
              />
            );
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
    // alignItems: "center",
    // justifyContent: "center",
    borderTopWidth: 1,
    borderColor: "#9784ce",
    width:layout.width 
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
