import * as Location from "expo-location";

import { useRef, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import WebView, { WebViewMessageEvent } from "react-native-webview";

import MapBottomSheet from "@/src/components/map/map-bottom-sheet";
import { postMessageInstance } from "@/src/utils/webview";

const uri = process.env.EXPO_PUBLIC_MAP_URL!;

export default function MapScreen() {
  const [items, setItems] = useState([]);
  const webviewRef = useRef<WebView>(null);

  const postMessage = postMessageInstance(webviewRef);

  const onMessage = (e: WebViewMessageEvent) => {
    const { type, data } = JSON.parse(e.nativeEvent.data);

    switch (type) {
      case "init":
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
      return Alert.alert("Permission to access location was denied");
    }

    const location = await Location.getCurrentPositionAsync({});

    postMessage("init", location.coords);
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
        scrollEnabled={false}
      />
      <MapBottomSheet items={items} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
