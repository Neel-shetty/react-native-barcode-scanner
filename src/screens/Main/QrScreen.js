import {
  Alert,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { layout } from "../../constants/layout";
import * as MediaLibrary from "expo-media-library";
import ViewShot, { captureRef } from "react-native-view-shot";
import { useRef } from "react";
import QRCode from "react-native-qrcode-svg";
import { useState } from "react";
import CustomButton from "../../components/SignInScreen2Components/common/CustomButton";
import * as SecureStore from "expo-secure-store";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { colors } from "../../constants/colors";

const QrScreen = ({ category }) => {
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const [link, setLink] = useState({});
  const [loading, setLoading] = useState(false);

  const imageRef = useRef();
  const route = useRoute();
  const navigation = useNavigation();

  async function setQrData() {
    const sender_id = await SecureStore.getItemAsync("id");
    const receiver_id = route?.params?.receiver_id;
    const category_id = route?.params?.category_id;
    setLink({
      receiver_id: receiver_id,
      category_id: category_id,
    });
  }

  const onSaveImageAsync = async () => {
    try {
      const localUri = await captureRef(imageRef, {
        quality: 1,
      });

      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        Alert.alert(
          "Image Saved to Gallery",
          "Print and paste it on your vehicle"
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  if (status === null) {
    requestPermission();
  }

  useEffect(() => {
    setQrData();
  }, []);

  return (
    <ViewShot ref={imageRef} style={styles.root}>
      <SafeAreaView style={styles.root}>
        <>
          {/* <ImageBackground
            source={require("../../../assets/images/bg2.png")}
            resizeMode="cover"
            style={styles.bgImage}
          /> */}
          <View style={styles.headerContainer}>
            <Text style={styles.myText}>My</Text>
            <Text style={styles.title}>SCANNER</Text>
            <Text style={styles.subtitle}>
              FOR ANY ISSUE RELATED TO VEHICLE, DOWNLOAD THE MY SCANNER APP AND
              SCAN ME
            </Text>
          </View>
          <View style={styles.qrContainer}>
            <View style={styles.blackContainer}>
              <View style={styles.whiteContainer}>
                <QRCode value={JSON.stringify(link)} size={200} />
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  height: 70,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontFamily: "poppins-bold",
                    fontSize: 34,
                  }}
                >
                  SCAN ME
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <Text
              style={{
                fontFamily: "poppins-medium",
                fontSize: 20,
                color: "white",
              }}
            >
              VEHICLE NO
            </Text>
            <Text
              style={{
                fontFamily: "poppins-medium",
                fontSize: 30,
                color: "white",
              }}
            >
              DL03AN1123
            </Text>
            <View style={{ marginTop: 10, marginBottom: 20 }}>
              <CustomButton
                title={"Buy QR"}
                onPress={() => navigation.navigate("OrderQRScreen")}
              />
              <View style={{ height: 10 }} />
              <CustomButton title={"Save"} onPress={onSaveImageAsync} />
            </View>
          </View>
        </>
      </SafeAreaView>
    </ViewShot>
  );
};

export default QrScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: layout.width,
    alignSelf: "center",
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
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  myText: {
    fontFamily: "poppins-semibold",
    fontSize: 25,
    color: "white",
  },
  title: {
    fontFamily: "poppins-bold",
    fontSize: 50,
    color: "white",
  },
  subtitle: {
    fontFamily: "poppins-medium",
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
  qrContainer: {
    flex: 2,
    // backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  blackContainer: {
    height: 320,
    width: 270,
    backgroundColor: "black",
    alignItems: "center",
    borderRadius: 20,
    paddingTop: 20,
  },
  whiteContainer: {
    backgroundColor: "white",
    width: 230,
    alignItems: "center",
    justifyContent: "center",
    height: 230,
    borderRadius: 10,
  },
  bottomContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
