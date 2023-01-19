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
          color="#764af1"
          style={{ paddingBottom: 3 }}
        />
        <TextInput style={styles.input} placeholder="Plans" />
      </View>
      <View style={styles.filterContainer}>
        <TouchableOpacity>
          <Ionicons name="filter" size={30} color="white" />
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
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 5,
    // width: layout.width * 0.75,
    height: 40,
    alignItems: "center",
    justifyContent: "space-around",
    flex: 7,
  },
  input: {
    width: layout.width * 0.6,
    // backgroundColor: "pink",
    fontFamily: "poppins-regular",
    fontSize: 16,
    alignItems: "center",
  },
  filterContainer: {
    backgroundColor: "#c471ed",
    borderRadius: 5,
    height: 40,
    maxWidth: 40,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginLeft: 20,
  },
});
