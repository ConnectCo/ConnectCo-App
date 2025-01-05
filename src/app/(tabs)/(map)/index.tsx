import * as Location from "expo-location";

import { useRef, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import WebView, { WebViewMessageEvent } from "react-native-webview";

import AuthScreen from "@/src/components/common/auth";
import MapBottomSheet from "@/src/components/map/map-bottom-sheet";
import { postMessageInstance } from "@/src/utils/webview";

let interval: NodeJS.Timeout;
const uri = "http://localhost:5173/";
const isAuthorized = true;

export default function MapScreen() {
  const [items, setItems] = useState([]);
  const webviewRef = useRef<WebView>(null);

  const postMessage = postMessageInstance(webviewRef);

  const onMessage = (e: WebViewMessageEvent) => {
    const { type, data } = JSON.parse(e.nativeEvent.data);

    switch (type) {
      case "init":
        clearInterval(interval);
        sendRealtimLocation();
        break;
      case "filter":
      case "pinned":
        setItems(data);
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

  return isAuthorized ? (
    <View style={styles.container}>
      <WebView
        ref={webviewRef}
        style={styles.container}
        source={{ uri }}
        onLoad={onLoad}
        onMessage={onMessage}
        scrollEnabled={false}
      />
      <MapBottomSheet items={items} />
    </View>
  ) : (
    <AuthScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
