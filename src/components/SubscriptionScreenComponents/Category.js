import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Category = ({ title }) => {
  return (
    <View style={styles.root}>
      <Text>{title}</Text>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});
