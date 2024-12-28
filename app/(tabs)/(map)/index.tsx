import * as Location from "expo-location";

import { useRef } from "react";
import { Alert, StyleSheet, View } from "react-native";
import WebView, { WebViewMessageEvent } from "react-native-webview";

import CustomBottomSheet from "@/components/map/bottom-sheet";
import { postMessageInstance } from "@/utils/webview";

let interval: NodeJS.Timeout;
const uri = "http://localhost:5173/";

const couponList = [
  {
    id: 1,
    type: "coupon" as const,
    host: "호말",
    title: "쿠키 무료 제공 쿠폰",
    duration: "2023.10.17 ~ 2023.10.29",
    source: require("../../../assets/images/homeal.png"),
  },
  {
    id: 2,
    type: "coupon" as const,
    host: "호말",
    title: "전 음료 10%할인 쿠폰",
    duration: "2023.10.17 ~ 2023.10.29",
    source: require("../../../assets/images/homeal.png"),
  },
];

export default function MapScreen() {
  const webviewRef = useRef<WebView>(null);
  const postMessage = postMessageInstance(webviewRef);

  const onMessage = (e: WebViewMessageEvent) => {
    const { type, data } = JSON.parse(e.nativeEvent.data);

    switch (type) {
      case "init":
        clearInterval(interval);
        sendRealtimLocation();
        break;
      default:
        break;
    }
  };

  async function onLoad() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission to access location was denied");
      return;
    }

    const location = await Location.getCurrentPositionAsync({});

    interval = setInterval(() => {
      postMessage("init", location.coords);
    }, 100);
  }

  async function sendRealtimLocation() {
    const location = await Location.getCurrentPositionAsync({});
    setInterval(() => {
      postMessage("realtime", location.coords);
    }, 5000);
  }

  return (
    <View style={styles.container}>
      <WebView
        ref={webviewRef}
        style={styles.container}
        source={{ uri }}
        onLoad={onLoad}
        onMessage={onMessage}
      />
      <CustomBottomSheet items={couponList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
