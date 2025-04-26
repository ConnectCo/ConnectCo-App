import * as Location from "expo-location";
import { router } from "expo-router";

import { useRef, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import WebView, { WebViewMessageEvent } from "react-native-webview";

import Button from "@/src/components/common/button";
import Flex from "@/src/components/common/flex";
import Icon from "@/src/components/common/icon";
import Text from "@/src/components/common/text";
import MapBottomSheet from "@/src/components/map/map-bottom-sheet";
import { colors } from "@/src/constants/color";
import { useGetEventCouponList } from "@/src/lib/tanstack/quries/map";
import { useUserStore } from "@/src/lib/zustand/user";
import { postMessageInstance } from "@/src/utils/webview";

const uri = process.env.EXPO_PUBLIC_MAP_URL!;

export default function MapScreen() {
  const [items, setItems] = useState([]);
  const webviewRef = useRef<WebView>(null);
  const userStore = useUserStore();

  const [{ data: eventList }, { data: couponList }] = useGetEventCouponList({
    size: 10,
    latitude: userStore.latitude,
    longitude: userStore.longitude,
  });

  const postMessage = postMessageInstance(webviewRef);

  const onMessage = (e: WebViewMessageEvent) => {
    const { type, data } = JSON.parse(e.nativeEvent.data);

    switch (type) {
      case "init":
      case "filter":
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

    postMessage("init", {
      latitude: userStore.latitude,
      longitude: userStore.longitude,
      events: eventList || [],
      coupons: couponList || [],
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Button onPress={() => router.push("/location-setting")}>
          <Flex direction="row" align="center" gap={10}>
            <Text size="md" weight={700} style={styles.menuText}>
              이벤트
            </Text>
            <Icon.Toggle />
          </Flex>
        </Button>
      </View>
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
  menu: {
    backgroundColor: colors.primary300,
    paddingBottom: 8,
    paddingHorizontal: 24,
    zIndex: 10,
    boxShadow: "0 4 4 0 rgba(0, 0, 0, 0.102)",
  },
  menuText: {
    color: colors.white,
  },
});
