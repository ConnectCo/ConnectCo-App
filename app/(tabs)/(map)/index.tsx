import * as Location from "expo-location";

import { useRef } from "react";
import { Alert, StyleSheet } from "react-native";
import WebView, { WebViewMessageEvent } from "react-native-webview";

import { postMessageInstance } from "@/utils/webview";

let interval: NodeJS.Timeout;
const uri = "http://localhost:5173/";

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
    <WebView
      ref={webviewRef}
      style={styles.container}
      source={{ uri }}
      onLoad={onLoad}
      onMessage={onMessage}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
