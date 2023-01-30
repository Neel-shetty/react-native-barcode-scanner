import {
  ActivityIndicator,
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Input from "./Input";
import UploadButton from "./UploadButton";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";
import { layout } from "../../constants/layout";
import { colors } from "../../constants/colors";
import { AntDesign } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";

const countries = ["Egypt", "Canada", "Australia", "Ireland"];

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
  const [test, setTest] = useState();
  // console.log("🚀 ~ file: Categories.js:16 ~ Categories ~ data", data[1].image);
  const route = useRoute();
  const formData = new FormData();

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

  async function sendData() {
    setLoading(true);
    const id = await SecureStore.getItemAsync("id");
    formData.append("category_id", route.params.category_id);
    formData.append("user_id", id);
    axios
      .post(`http://codelumina.com/project/scanme/api/dyanmic/form/insert`, {
        category_id: 7,
        user_name: "test name",
        contact_number: "12345",
        image: "xyz",
        gender: "Male",
      })
      .then((res) => {
        console.log(res.data);
        Alert.alert("sent data", JSON.stringify(res.data));
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

  if (loading) return <ActivityIndicator />;

  return (
    <View style={styles.root}>
      <Text>Fields</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          console.log("🚀 ~ file: Fields.js:94 ~ Fields ~ item", item);
          if (item.field_type === "select") {
            formData.append(item.label, "test");
            return (
              <View style={{ paddingVertical: 10 }}>
                <SelectDropdown
                  data={item.values}
                  defaultButtonText={`Select ${item.label}`}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return (
                      <Text
                        style={{
                          color: colors.black,
                        }}
                      >
                        {selectedItem}
                      </Text>
                    );
                  }}
                  rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item;
                  }}
                  buttonStyle={{
                    width: layout.widthp,
                    backgroundColor: "white",
                    borderRadius: 10,
                    height: 45,
                  }}
                  buttonTextStyle={{
                    fontFamily: "inter-semibold",
                    color: "#9e9e9e",
                  }}
                  renderDropdownIcon={() => (
                    <View
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <AntDesign name="down" size={20} color="black" />
                    </View>
                  )}
                  dropdownStyle={{ backgroundColor: "white", borderRadius: 10 }}
                  rowTextStyle={{ fontFamily: "inter-semibold" }}
                  selectedRowStyle={{ backgroundColor: "#ba92f3" }}
                  selectedRowTextStyle={{ color: "white" }}
                />
                <Button title="send" onPress={sendData} />
              </View>
            );
          }
          if (item.field_type === "text") {
            formData.append(item.label, "test");
            return (
              <View>
                <Input placeholder={item.label} name={item.name} />
              </View>
            );
          }
          if (item.field_type === "number") {
            formData.append(item.label, "test");
            return <Input placeholder={item.label} keyboardType={"numeric"} />;
          }
          if (item.field_type === "file") {
            formData.append(item.label, "test");
            return <UploadButton title={item.label} />;
          }
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
