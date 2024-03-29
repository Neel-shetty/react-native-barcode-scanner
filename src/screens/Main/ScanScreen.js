import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { layout } from "../../constants/layout";
import CustomButton from "../../components/SignInScreen2Components/common/CustomButton";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import { BASEURL } from "../../constants/apiurl";
import { useNavigation } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import firestore from "@react-native-firebase/firestore";

const ScanScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  console.log("🚀 ~ file: ScanScreen.js:14 ~ ScanScreen ~ scanned", scanned);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  // async function fetchQrDetails(url) {
  //   axios
  //     .post(url)
  //     .then((res) => {
  //       console.log("response data ---------- ", res.data);
  //       if (res.data) {
  //         const receiverId = res.data.data.receiver_id;
  //         const category_id = res.data.data.category_id;
  //         navigation.navigate("DmScreen", {
  //           receiverId: receiverId,
  //           category_id: category_id,
  //         });
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("error");
  //       if (error.response) {
  //         console.log(error.response.data);
  //         setLoading(false);
  //       } else if (error.request) {
  //         console.log(error.request);
  //         setLoading(false);
  //       } else {
  //         console.log(error.message);
  //         setLoading(false);
  //       }
  //     });
  // }

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };
    getBarCodeScannerPermissions();
    return () => {
      setScanned(false);
    };
  }, []);

  /**
   * @param {string} combinedUid
   * @param {string} receiverId
   * @param {string} senderId
   * @param {string} categoryId
   */
  async function createChat(combinedUid, receiverId, senderId, categoryId) {
    const doc = await firestore().collection("chats").doc(combinedUid).get();
    const userChat = await firestore()
      .collection("userChats")
      .doc(senderId)
      .set({
        users: firestore.FieldValue.arrayUnion(receiverId),
      });

    if (doc.exists) {
      return;
    }
    firestore()
      .collection("chats")
      .doc(combinedUid)
      .set({
        combinedUid,
        users: [receiverId, senderId],
        receiverId,
        senderId,
        categoryId,
      });
  }

  const handleBarCodeScanned = async ({ type, data }) => {
    console.log(
      "🚀 ~ file: ScanScreen.js:25 ~ handleBarCodeScanned ~ data",
      data
    );
    // fetchQrDetails(data);
    /**
     * @type {object}
     * @property {string} receiver_id
     * @property {string} category_id
     */
    const scannedData = JSON.parse(data);

    const id = await SecureStore.getItemAsync("id");
    const tmpArr = [Number(scannedData?.receiver_id), Number(id)];
    // tmpArr.sort();
    tmpArr.sort((a, b) => a > b);
    const cId = tmpArr.join("-");
    await createChat(
      cId,
      scannedData?.receiver_id,
      id,
      scannedData?.category_id
    );
    navigation.navigate("DmScreen", {
      receiverId: scannedData?.receiver_id,
      categoryId: scannedData?.category_id,
      userId: id,
    });
    setScanned(true);
    alert(`QR code has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.root}>
      <StatusBar style="light" />
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{
          height: layout.height,
          width: layout.width,
          flex: 1,
          // position: "absolute",
          // zIndex: -1,
        }}
      />
      {scanned && (
        <View
          style={{ position: "absolute", bottom: 50, left: layout.width / 3.5 }}
        >
          <CustomButton
            title={"Scan again"}
            onPress={() => {
              setScanned(false);
            }}
          />
        </View>
      )}
    </View>
  );
};

export default ScanScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: layout.height,
    width: layout.width,
    backgroundColor: "black",
  },
});
