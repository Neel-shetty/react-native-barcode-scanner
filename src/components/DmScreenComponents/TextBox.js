import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../constants/colors";

const TextBox = ({
  text,
  textAlign = "right",
  type = "sender",
  read,
  date,
}) => {
  console.log("🚀 ~ file: TextBox.js:14 ~ date:", date);
  // const time = new Date();
  // time.setUTCMilliseconds(date);
  // time.setSeconds(date);
  // time.getTime();
  // console.log("🚀 ~ file: TextBox.js:17 ~ time:", time);
  // // function toDateTime(secs) {
  //   var t = new Date(1970, 0, 1); // Epoch
  //   t.setSeconds(secs);
  // return t;
  // }
  // console.log(
  //   "🚀 ~ file: TextBox.js:9 ~ TextBox ~ time.getTime()",
  //   time.getHours(),
  //   time.getMinutes(),
  //   time.toLocaleTimeString("en-US", {
  //     timeZone: "UTC",
  //     hour12: true,
  //     // hour: "numeric",
  //     // minute: "numeric",
  //   })
  // );
  return (
    <View
      style={[
        styles.root,
        textAlign === "left"
          ? {
              backgroundColor: "#2e2e2e",
              alignSelf: "flex-start",
              marginLeft: 20,
            }
          : null,
      ]}
    >
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.message,
            textAlign === "left" ? { color: "white" } : { color: "white" },
          ]}
        >
          {text}
        </Text>
      </View>
      <View style={styles.timeContainer}>
        <Text
          style={[
            styles.time,
            textAlign === "left" ? { color: "white" } : null,
          ]}
        >
          {date?.getHours()}:{date?.getMinutes()}
        </Text>
        {textAlign === "right" ? (
          <Ionicons
            name={read == "1" ? "checkmark-done" : "checkmark"}
            size={15}
            color="white"
            style={{ paddingLeft: 5 }}
          />
        ) : null}
      </View>
    </View>
  );
};

export default React.memo(TextBox);

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    maxWidth: layout.width * (2 / 3),
    backgroundColor: "black",
    marginVertical: 10,
    alignSelf: "flex-end",
    borderRadius: 10,
    marginRight: 20,
    padding: 10,
  },
  message: {
    fontFamily: "poppins-medium",
    fontSize: 16,
    textAlign: "left",
    color: "#605ea7",
  },
  timeContainer: {
    alignSelf: "flex-end",
    flexDirection: "row",
  },
  textContainer: {
    alignSelf: "flex-start",
  },
  time: {
    color: "#7e738d",
    fontFamily: "poppins-regular",
    fontSize: 12,
  },
});
