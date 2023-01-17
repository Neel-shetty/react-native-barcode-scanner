import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { layout } from "../../constants/layout";
import { ssstyle, style } from "../../constants/style";

const ScanScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.root}>
      {/* <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{ height: 1280, width: 720 }}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
      <View
        style={{
          position: "absolute",
          height: layout.height,
          width: layout.width,
          backgroundColor: "rgba(0,0,0,0.5)",
          justifyContent: "center",
          alignItems: "center",
        }}
      > */}
      {/* <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}></View> */}
      {/* <Text
          style={[
            style.psb18,
            {
              backgroundColor: "white",
              // borderRadius: 30,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              paddingHorizontal: 10,
              width: 300,
              textAlign: "center",
            },
          ]}
        >
          Scan the QR code
        </Text>
        <View
          style={{
            borderWidth: 2,
            width: 300,
            height: 300,
            borderColor: "white",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        ></View> */}
      {/* <View style={{ flex: 1, backgroundColor: "white" }}></View> */}
      {/* </View> */}
      <Text>Email</Text>
    </View>
  );
};

export default ScanScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
