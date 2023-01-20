import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Plan from "./Plan";
import { layout } from "../../constants/layout";
import PlanItem from "./PlanItem";

const plans = [
  {
    name: "Bronze",
    info: "3+ Entries",
    key: 1,
    selected: false,
  },
  {
    name: "Silver",
    info: "6+ Entries",
    key: 2,
    selected: false,
  },
  {
    name: "Gold",
    info: "9+ Entries",
    key: 3,
    selected: false,
  },
  {
    name: "Platinum",
    info: "12+ Entries",
    key: 4,
    selected: false,
  },
];

const PlanView = () => {
  return (
    <View
      // contentContainerStyle={styles.root}
      style={{
        width: layout.width,
        // backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FlatList
        data={plans}
        renderItem={({ item }) => {
          return (
            <View style={{ transform: [{ scale: 0.9 }] }}>
              <PlanItem title={item.name} />
            </View>
          );
        }}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
      {/* <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: layout.widthp,
        }}
      >
        <View style={{ flex: 1 }}>
          <PlanItem />
        </View>
        <View style={{ flex: 1 }}>
          <PlanItem />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          // flex: 1,
          width: layout.widthp,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View>
          <PlanItem />
        </View>
        <View>
          <PlanItem />
        </View>
      </View> */}
    </View>
  );
};

export default PlanView;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "space-between",
    width: layout.widthp,
    flex: 1,
    paddingTop: 30,
    // alignSelf: "center",
    // height: 500,
    // backgroundColor: "pink",
    // transform: [{ scale: 0.8 }],
  },
});
