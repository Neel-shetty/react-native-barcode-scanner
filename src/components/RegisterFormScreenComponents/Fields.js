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
import { useRef } from "react";
import CustomButton from "../SignInScreen2Components/common/CustomButton";

const Fields = () => {
  const [loading, setLoading] = useState();
  const [data, setData] = useState([]);
  const [response, setResponse] = useState([]);

  console.log("🚀 ~ file: Fields.js:29 ~ Fields ~ response", response);

  // console.log("🚀 ~ file: Fields.js:27 ~ Fields ~ data", data);

  const route = useRoute();
  const formData = new FormData();

  function submit() {
    // Alert.alert("Success", "Data submitted successfully");
  }

  async function fetchCategories() {
    setLoading(true);
    axios
      .post(
        `http://codelumina.com/project/scanme/api/dyanmic/form?category_id=${route?.params?.categoryId}`
      )
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
        // console.log(res.data);
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
    defaultResponseValue();
  }, []);

  useEffect(() => {
    onSubmit();
  }, []);

  if (loading) return <ActivityIndicator />;

  function defaultResponseValue() {
    let temp = data.map((item) => {
      return { [item.label]: "" };
    });
    console.log("🚀 ~ file: Fields.js:99 ~ temp ~ temp", temp);
    setResponse(temp);
  }
  // setResponse(temp)
  const onChangeText = (ind, txt, label) => {
    console.log("onchange function");
    let temp = response;
    let idk = [];
    temp.map((item, index) => {
      const lbname = item[label];
      if (index == ind) {
        idk.push({ ...response, [label]: txt });
      }
    });
    console.log("🚀 ~ file: Fields.js:119 ~ temp.map ~ temp", idk);
    setResponse([idk]);
    console.log("onchange text end");
  };

  const onSelectImage = (ind, uri, label) => {
    console.log("onselect image function");
    let temp = response;
    let idk = [];
    temp.map((item, index) => {
      if (index == ind) {
        item[label] = uri;
        idk.push({ ...item, [label]: uri });
      }
    });
    console.log("🚀 ~ file: Fields.js:119 ~ temp.map ~ temp", temp);
    setResponse(idk);
  };

  const onSelectOption = (ind, txt, label) => {
    console.log("onchange function");
    let temp = response;
    temp.map((item, index) => {
      if (index == ind) {
        item[label] = txt;
      }
    });
    console.log("🚀 ~ file: Fields.js:119 ~ temp.map ~ temp", temp);
    setResponse(temp);
  };

  function onSubmit() {
    console.log("on submit --------- ");
  }

  return (
    <View style={styles.root}>
      <View style={{ flex: 9 }}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => {
            // console.log("🚀 ~ file: Fields.js:94 ~ Fields ~ item", item);
            if (item.field_type === "select") {
              return (
                <View style={{ paddingVertical: 10 }}>
                  <SelectDropdown
                    data={item.values}
                    defaultButtonText={`Select ${item.label}`}
                    onSelect={(selectedItem, indx) => {
                      console.log(selectedItem, index);
                      onSelectOption(index, selectedItem, item.label);
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
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <AntDesign name="down" size={20} color="black" />
                      </View>
                    )}
                    dropdownStyle={{
                      backgroundColor: "white",
                      borderRadius: 10,
                    }}
                    rowTextStyle={{ fontFamily: "inter-semibold" }}
                    selectedRowStyle={{ backgroundColor: "#ba92f3" }}
                    selectedRowTextStyle={{ color: "white" }}
                  />
                </View>
              );
            }
            if (item.field_type === "text") {
              formData.append(item.label, "test");
              return (
                <View>
                  <Input
                    placeholder={item.label}
                    onChangeText={(value) => {
                      onChangeText(index, value, item.label);
                    }}
                    // value={''}
                  />
                </View>
              );
            }
            if (item.field_type === "number") {
              formData.append(item.label, "test");
              return (
                <Input
                  placeholder={item.label}
                  keyboardType={"numeric"}
                  onChangeText={(value) =>
                    onChangeText(index, value, item.label)
                  }
                  // value={refInputs.current[item.label]}
                />
              );
            }
            if (item.field_type === "file") {
              formData.append(item.label, "test");
              return (
                <UploadButton
                  title={item.label}
                  onSelectImage={(val) => onSelectImage(index, val, item.label)}
                />
              );
            }
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>{JSON.stringify(response)}</Text>
        <CustomButton
          title={"Submit"}
          onPress={() => {
            setTimeout(
              submit,
              Math.floor(Math.random() * (5000 - 1000)) + 1000
            );
          }}
        />
      </View>
    </View>
  );
};

export default Fields;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
