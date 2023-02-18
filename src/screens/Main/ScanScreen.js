import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { layout } from "../../constants/layout";
import CustomButton from "../../components/SignInScreen2Components/common/CustomButton";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import { BASEURL } from "../../constants/apiurl";
import { useNavigation } from "@react-navigation/native";

const ScanScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  async function fetchQrDetails(url) {
    axios
      .post(url)
      .then((res) => {
        console.log("response data ---------- ", res.data);
        if (res.data) {
          const receiverId = res.data.data.receiver_id;
          const category_id = res.data.data.category_id;
          navigation.navigate("DmScreen", {
            receiverId: receiverId,
            category_id: category_id,
          });
        }
      })
      .catch((error) => {
        console.log("error");
        if (error.response) {
          console.log(error.response.data);
          setLoading(false);
        } else if (error.request) {
          console.log(error.request);
          setLoading(false);
        } else {
          console.log(error.message);
          setLoading(false);
        }
      });
  }

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    console.log(
      "🚀 ~ file: ScanScreen.js:25 ~ handleBarCodeScanned ~ data",
      data
    );
    fetchQrDetails(data);
    setScanned(true);
    alert(`QR code has been scanned!`);
  };

  function fetchUserDetails() {
    axios
      .post(`${BASEURL}/my/messages`, {
        sender_id: id,
        receiver_id: route.params.receiverId,
        // category_id: route.params.category_id,
      })
      .then((res) => {
        console.log("response data ---------- ", res.data);
      })
      .catch((error) => {
        console.log("error");
        if (error.response) {
          console.log(error.response.data);
          setLoading(false);
        } else if (error.request) {
          console.log(error.request);
          setLoading(false);
        } else {
          console.log(error.message);
          setLoading(false);
        }
      });
  }

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
