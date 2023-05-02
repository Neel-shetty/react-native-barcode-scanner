import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { layout } from "../../constants/layout";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { BASEURL } from "../../constants/apiurl";

const Banner = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  const navigation = useNavigation();

  const ref = useRef();

  async function getImages() {
    axios
      .post(`${BASEURL}/banners`)
      .then((res) => {
        console.log(res.data);
        setImages(res.data.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getImages();
  }, []);

  useEffect(() => {
    let interval = null;
    if (images.length === 0) {
      return;
    }
    if (autoScroll) {
      interval = setInterval(() => {
        let nextIndex = currentIndex + 1;
        if (nextIndex >= images.length) {
          nextIndex = 0;
        }
        setCurrentIndex(nextIndex);
        ref.current.scrollToIndex({
          animated: true,
          index: nextIndex,
        });
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [autoScroll, currentIndex, images]);

  return (
    <View style={styles.root}>
      <View>
        <Animated.FlatList
          ref={ref}
          data={images}
          renderItem={({ item }) => {
            return (
              <Animated.View
                key={item.id}
                style={{
                  width: layout.widthp,
                  overflow: "hidden",
                  // backgroundColor:'pink'
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    if (item.page === "Plans") {
                      navigation.navigate("SubscriptionScreen");
                    }
                  }}
                >
                  {/* <View style={styles.bannerTextContainer}> */}
                  {/* <Text style={styles.bannerText}>{item.title}</Text>
                  <Text style={styles.bannerText2}>{item.title2}</Text> */}
                  {/* </View> */}
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      // height: layout.widthp / 3,
                      height: "100%",
                      width: layout.widthp,
                      // backgroundColor: "pink",
                    }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </Animated.View>
            );
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          getItemLayout={(data, index) => ({
            length: layout.widthp,
            offset: layout.widthp * index,
            index,
          })}
          snapToInterval={layout.widthp}
          decelerationRate="fast"
          bounces={false}
          pagingEnabled
          onScroll={(e) => {}}
          windowSize={1}
          initialNumToRender={1}
          maxToRenderPerBatch={1}
          removeClippedSubviews={true}
          viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          width: layout.widthp,
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: "turquoise",
          // height: 30,
        }}
      ></View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    height: layout.height * 0.2,
    width: layout.widthp,
    backgroundColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
  },
});
