import {
  ActivityIndicator,
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { layout } from "../../constants/layout";
import Header from "../../components/OrderQRScreenComponents/Header";
import InputFields from "../../components/EditProfileScreenComponents/InputFields";
import { useState } from "react";
import { useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import { BASEURL } from "../../constants/apiurl";
import RenderHtml, { defaultSystemFonts } from "react-native-render-html";
import { colors } from "../../constants/colors";

const PrivacyScreen = () => {
  const [terms, setTerms] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTerms = async () => {
      try {
        setLoading(true);
        axios.post(`${BASEURL}/privacy`).then((res) => {
          console.log(res.data);
          setTerms(res.data?.data);
          setLoading(false);
        });
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getTerms();
  }, []);

  const systemFonts = [
    ...defaultSystemFonts,
    "Poppins-SemiBold",
    "Poppins-Regular",
  ];

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 70}
      enabled={false}
      style={styles.root}
    >
      <View style={styles.root}>
        {/* <ImageBackground
          source={require("../../../assets/images/bg2.png")}
          resizeMode="cover"
          style={styles.bgImage}
        /> */}
        <View style={styles.headerContainer}>
          <Header title={"Privacy Policy"} />
        </View>
        <View
          style={{ flex: 8, alignItems: "flex-start", width: layout.widthp }}
        >
          {loading ? (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                width: layout.widthp,
              }}
            >
              <ActivityIndicator size="large" color="black" />
            </View>
          ) : (
            <>
              <Text style={styles.heading}>{terms?.title}</Text>
              <RenderHtml
                width={layout.widthp}
                source={{ html: terms?.description }}
                tagsStyles={{
                  strong: {
                    fontFamily: "poppins-semibold",
                    fontSize: 20,
                    color: "white",
                  },
                  p: {
                    fontFamily: "poppins-medium",
                    color: "white",
                    fontSize: 15,
                  },
                }}
                systemFonts={systemFonts}
              />
            </>
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default PrivacyScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blackBg,
  },
  bgImage: {
    flex: 1,
    width: layout.width,
    height: layout.height,
    position: "absolute",
    top: 0,
    transform: [{ scale: 2 }],
  },
  headerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "pink",
  },
  heading: {
    fontFamily: "poppins-semibold",
    fontSize: 20,
    color: "white",
  },
});
