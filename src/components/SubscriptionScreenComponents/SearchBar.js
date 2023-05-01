import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { layout } from "../../constants/layout";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <Ionicons
          name="search"
          size={24}
          color="white"
          style={{ paddingBottom: 3 }}
        />
        <TextInput
          placeholderTextColor={"white"}
          style={styles.input}
          placeholder="Plans"
        />
      </View>
      <View style={styles.filterContainer}>
        <TouchableOpacity>
          <Ionicons name="filter" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "space-around",
    width: layout.widthp,
    flexDirection: "row",
  },
  inputContainer: {
    backgroundColor: "black",
    flexDirection: "row",
    borderRadius: 20,
    // width: layout.width * 0.75,
    height: 40,
    alignItems: "center",
    justifyContent: "space-around",
    flex: 7,
    borderWidth: 1,
    borderColor: "white",
  },
  input: {
    width: layout.width * 0.6,
    // backgroundColor: "pink",
    fontFamily: "poppins-regular",
    fontSize: 16,
    alignItems: "center",
    color: "white",
  },
  filterContainer: {
    backgroundColor: "black",
    borderRadius: 20,
    height: 40,
    maxWidth: 40,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: "white",
  },
});
