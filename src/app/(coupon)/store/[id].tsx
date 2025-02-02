import * as Linking from "expo-linking";
import { Route, router } from "expo-router";

import { useRef, useState } from "react";
import { StyleSheet } from "react-native";
import WebView from "react-native-webview";

import Card from "@/src/components/common/card";
import CommonDetail from "@/src/components/common/detail";
import Flex from "@/src/components/common/flex";
import Text from "@/src/components/common/text";
import Content from "@/src/components/common/text/content";
import { postMessageInstance } from "@/src/utils/webview";

const images = [
  {
    id: 1,
    source: require("../../../assets/static/store.png"),
  },
  {
    id: 2,
    source: require("../../../assets/static/store.png"),
  },
  {
    id: 3,
    source: require("../../../assets/static/store.png"),
  },
];

const couponList = [
  {
    id: 1,
    host: "호말",
    title: "쿠키 무료 제공 쿠폰",
    duration: "2023.10.17 ~ 2023.10.29",
    source: require("../../../assets/static/homeal.png"),
  },
  {
    id: 2,
    host: "호말",
    title: "전 음료 10%할인 쿠폰",
    duration: "2023.10.17 ~ 2023.10.29",
    source: require("../../../assets/static/homeal.png"),
  },
];

const uri = process.env.EXPO_PUBLIC_DETAIL_MAP_URL!;

export default function StoreScreen() {
  const [selected, setSelected] = useState(false);
  const webviewRef = useRef<WebView>(null);

  const postMessage = postMessageInstance(webviewRef);

  const onSelect = () => {
    setSelected((prev) => !prev);
  };

  const onPressCall = () => {
    Linking.openURL("tel:010-3708-0438").catch((err) => {
      console.error("Failed to open URL:", err);
    });
  };

  const onRouteDetail = (id: number) => {
    router.push(`/(coupon)/${id}` as Route);
  };

  async function onLoad() {
    postMessage("location", "서울 성동구 마조로 15-16");
  }

  return (
    <CommonDetail
      images={images}
      type="store"
      title="호말 커피"
      description={
        "90년대 사무실 분위기에서 느끼는 힙스러움!\n매장에서 직접 만드는 맛있는 음료와 제과를 맛보실 수 \n있습니다."
      }
      selected={selected}
      onPressFavorite={onSelect}
      onRouteSwag={onPressCall}
      onRouteChat={() => {}}
    >
      <Flex gap={10}>
        <Text size="xl">쿠폰 목록</Text>
        <Flex gap={15}>
          {couponList.map((coupon) => (
            <Card
              key={coupon.id}
              {...coupon}
              type="coupon"
              onPress={() => onRouteDetail(coupon.id)}
            />
          ))}
        </Flex>
      </Flex>
      <Flex gap={20}>
        <Text size="xl">가게 정보</Text>
        <Content title="가게 위치" content="서울 성동구 마조로 15-16 1층" />
        <WebView ref={webviewRef} style={styles.webview} source={{ uri }} onLoad={onLoad} />
        <Content title="가게 연락처" content="070-8671-4208" />
        <Content title="운영시간" content={"월~토 12:00~23:00\n일 12:00~21:30"} />
      </Flex>
    </CommonDetail>
  );
}

const styles = StyleSheet.create({
  webview: {
    width: "100%",
    height: 236,
  },
});
