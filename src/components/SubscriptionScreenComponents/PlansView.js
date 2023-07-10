import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Plan from "./Plan";
import { layout } from "../../constants/layout";
import PlanItem from "./PlanItem";
import axios from "axios";
import { useSelector } from "react-redux";

// const plans = [
//   {
//     name: "Bronze",
//     info: "3+ Entries",
//     key: 1,
//     selected: false,
//   },
//   {
//     name: "Silver",
//     info: "6+ Entries",
//     key: 2,
//     selected: false,
//   },
//   {
//     name: "Gold",
//     info: "9+ Entries",
//     key: 3,
//     selected: false,
//   },
//   {
//     name: "Platinum",
//     info: "12+ Entries",
//     key: 4,
//     selected: false,
//   },
// ];

const placeholder = [
  {
    id: 1,
    plan_type: "Monthly",
    plan_name: "PLATINUM",
    image:
      "https://codelumina.com/project/scanme/public/uploads/subscription/6656390556.png",
    register_limit: "3",
    description: "Testing Hello wolrd",
    status: "Active",
    created_at: "2023-01-19T14:25:18.000000Z",
    updated_at: "2023-01-19T14:28:35.000000Z",
  },
  {
    id: 2,
    plan_type: "Quarterly",
    plan_name: "SILVAR",
    image:
      "https://codelumina.com/project/scanme/public/uploads/subscription/2141595775.jpeg",
    register_limit: "5",
    description: "tHIS IS SILVAR PLAN",
    status: "Active",
    created_at: "2023-01-19T14:29:56.000000Z",
    updated_at: "2023-01-19T14:40:42.000000Z",
  },
  {
    id: 3,
    plan_type: "Monthly",
    plan_name: "GOLD",
    image:
      "https://codelumina.com/project/scanme/public/uploads/subscription/8646398892.jpeg",
    register_limit: "9",
    description: "THIS IS GOLD PLAN",
    status: "Active",
    created_at: "2023-01-19T14:30:50.000000Z",
    updated_at: "2023-01-19T14:30:50.000000Z",
  },
  {
    id: 4,
    plan_type: "Monthly",
    plan_name: "BRONZE",
    image:
      "https://codelumina.com/project/scanme/public/uploads/subscription/6915289039.png",
    register_limit: "12",
    description: "bronze plan",
    status: "Active",
    created_at: "2023-01-19T14:31:51.000000Z",
    updated_at: "2023-01-19T14:31:51.000000Z",
  },
  {
    id: 5,
    plan_type: "Quarterly",
    plan_name: "Gold",
    image:
      "https://codelumina.com/project/scanme/public/uploads/subscription/6246013583.jpeg",
    register_limit: "16",
    description: "test",
    status: "Active",
    created_at: "2023-01-20T07:22:50.000000Z",
    updated_at: "2023-01-20T07:22:50.000000Z",
  },
  {
    id: 6,
    plan_type: "Half Yearly",
    plan_name: "PLATINUM",
    image:
      "https://codelumina.com/project/scanme/public/uploads/subscription/8991399278.png",
    register_limit: "18",
    description: "TEST EDEE",
    status: "Active",
    created_at: "2023-01-20T07:23:07.000000Z",
    updated_at: "2023-01-20T07:23:07.000000Z",
  },
  {
    id: 7,
    plan_type: "Half Yearly",
    plan_name: "GOLD",
    image:
      "https://codelumina.com/project/scanme/public/uploads/subscription/2199217752.jpeg",
    register_limit: "20",
    description: "BEREE",
    status: "Active",
    created_at: "2023-01-20T07:23:18.000000Z",
    updated_at: "2023-01-20T07:23:25.000000Z",
  },
  {
    id: 8,
    plan_type: "Yearly",
    plan_name: "SILVAR",
    image:
      "https://codelumina.com/project/scanme/public/uploads/subscription/7417030622.jpeg",
    register_limit: "25",
    description: "tHIS IS SILVAR PLAN For Yearly",
    status: "Active",
    created_at: "2023-01-20T07:23:53.000000Z",
    updated_at: "2023-01-20T07:23:53.000000Z",
  },
];

const PlanView = () => {
  const [planData, setPlanData] = useState(null);
  const [loading, setLoading] = useState(false);

  const category = useSelector((state) => state.plan.category);
  console.log("🚀 ~ file: PlansView.js:146 ~ PlanView ~ category", category);

  if (planData) {
    console.log(
      "🚀 ~ file: PlansView.js:37 ~ PlanView ~ planData",
      planData[1]
    );
  }

  async function getPlanData() {
    if (category.title === "All") {
      setLoading(true);
      axios
        .post("https://skanme.in/subscriptions")
        .then((res) => {
          // console.log(res.data.data)
          setPlanData(res.data.data);
          setLoading(false);
        })
        .catch((error) => console.log(error, error.message));
    } else if (category.title === "Monthly") {
      setLoading(true);
      axios
        .post("https://skanme.in/subscription/type", {
          plan_type: "Monthly",
        })
        .then((res) => {
          console.log(res.data.data);
          setPlanData(res.data.data);
          setLoading(false);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    } else if (category.title === "Quarterly") {
      setLoading(true);
      axios
        .post("https://skanme.in/subscription/type", {
          plan_type: "Quarterly",
        })
        .then((res) => {
          console.log(res.data.data);
          setPlanData(res.data.data);
          setLoading(false);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    } else if (category.title === "Half Yearly") {
      setLoading(true);
      axios
        .post("https://skanme.in/subscription/type", {
          plan_type: "Half Yearly",
        })
        .then((res) => {
          console.log(res.data.data);
          setPlanData(res.data.data);
          setLoading(false);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    } else if (category.title === "Yearly") {
      setLoading(true);
      axios
        .post("https://skanme.in/subscription/type", {
          plan_type: "Yearly",
        })
        .then((res) => {
          console.log(res.data.data);
          setPlanData(res.data.data);
          setLoading(false);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
          setLoading(false);
        });
    } else {
      setLoading(true);
      axios
        .post("https://skanme.in/subscriptions")
        .then((res) => {
          // console.log(res.data.data)
          setPlanData(res.data.data);
          setLoading(false);
        })
        .catch((error) => console.log(error, error.message));
    }
  }

  useEffect(() => {
    getPlanData();
  }, [category]);

  if (!planData || loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={"large"} color={"white"} />
      </View>
    );
  }

  return (
    <View
      style={{
        width: layout.width,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FlatList
        data={planData}
        renderItem={({ item }) => {
          return (
            <View style={{ transform: [{ scale: 0.9 }] }}>
              <PlanItem
                plan={item}
                title={item.plan_name}
                image={item.image}
                limit={item.register_limit}
                type={item.plan_type}
                price={item.price}
              />
            </View>
          );
        }}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
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
