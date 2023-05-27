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

const TermsAndConditions = ({ terms, setTerms, screen, color }) => {
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
        marginBottom: 15,
        marginTop: 15,
      }}
    >
      <Checkbox
        value={terms}
        onValueChange={(event) => {
          setTerms(event);
        }}
        style={{ marginRight: 10 }}
        color={color ? null : "white"}
      />
      <TouchableOpacity>
        <Text
          style={{ fontFamily: "poppins-medium", color: "white", fontSize: 12 }}
        >
          Accept terms and conditions
        </Text>
      </TouchableOpacity>
      {/* <Text
        style={{
          // width: layout.widthp,
          fontFamily: "poppins-medium",
          color: "white",
        }}
      >
        I have read and agree to the
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("TermsScreen", { previousScreen: screen });
          }}
        >
          <Text
            style={{
              fontFamily: "poppins-medium",
              color: color ? "white" : "white",
            }}
          >
            Terms of Service
          </Text>
        </TouchableOpacity>
        <View>
          <Text style={{ fontFamily: "poppins-medium", color: "white" }}>
            {" "}
            and
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PrivacyPolicy", {
              previousScreen: screen,
            });
          }}
        >
          <Text
            style={{
              fontFamily: "poppins-medium",
              color: color ? "white" : "white",
            }}
          >
            {" "}
            Privacy Policy
          </Text>
        </TouchableOpacity>
      </Text> */}
    </View>
  );
};

export default TermsAndConditions;

const styles = StyleSheet.create({});
