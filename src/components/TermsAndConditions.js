import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { layout } from "../constants/layout";
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";

const TermsAndConditions = ({ terms, setTerms, screen }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: layout.width * 0.05,
        width: layout.widthp,
        // backgroundColor: "pink",
        marginBottom: 10,
      }}
    >
      <Checkbox
        value={terms}
        onValueChange={(event) => {
          setTerms(event);
        }}
        style={{ marginRight: 10 }}
        color={"#c874ec"}
      />
      <Text
        style={{
          // width: layout.widthp,
          fontFamily: "poppins-regular",
        }}
      >
        I have read and agree to the
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("TermsScreen", { previousScreen: screen });
          }}
        >
          <Text style={{ fontFamily: "poppins-regular", color: "#c874ec" }}>
            Terms of Service
          </Text>
        </TouchableOpacity>
        <View>
          <Text style={{ fontFamily: "poppins-regular" }}> and</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PrivacyPolicy", {
              previousScreen: screen,
            });
          }}
        >
          <Text style={{ fontFamily: "poppins-regular", color: "#c874ec" }}>
            {" "}
            Privacy Policy
          </Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default TermsAndConditions;

const styles = StyleSheet.create({});
