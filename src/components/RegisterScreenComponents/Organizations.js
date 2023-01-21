import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";
import OrganizationButton from "./OrganizationButton";
import { Octicons } from "@expo/vector-icons";

const data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const Organizations = () => {
  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Organizations</Text>
        <View style={{ paddingLeft: 10 }}>
          <Octicons name="arrow-down" size={24} color="black" />
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return <OrganizationButton data={item} />;
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
