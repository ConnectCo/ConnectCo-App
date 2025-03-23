import * as Linking from "expo-linking";
import { Route, router, useLocalSearchParams } from "expo-router";

import { useRef } from "react";
import { StyleSheet } from "react-native";
import WebView from "react-native-webview";

import Card from "@/src/components/common/card";
import CommonDetail from "@/src/components/common/detail";
import Flex from "@/src/components/common/flex";
import Text from "@/src/components/common/text";
import Content from "@/src/components/common/text/content";
import { SCREEN } from "@/src/constants/screen";
import { useGetStoreDetail } from "@/src/lib/tanstack/quries/store";
import { StoreInformationDTO } from "@/src/models/store";
import { postMessageInstance } from "@/src/utils/webview";

const uri = process.env.EXPO_PUBLIC_DETAIL_MAP_URL!;

export default function StoreScreen() {
  const { id } = useLocalSearchParams();
  const { data } = useGetStoreDetail<StoreInformationDTO>(+id);

  const coupons = data.result.coupons.map((coupon) => ({
    id: coupon.couponId,
    title: coupon.name,
    name: data.result.name,
    thumbnail: coupon.couponThumbnail ?? "",
    expiredAt: coupon.expiredAt,
  }));

  const webviewRef = useRef<WebView>(null);

  const postMessage = postMessageInstance(webviewRef);

  const onPressCall = () => {
    Linking.openURL(`tel:${data.result.phoneNumber}`).catch((err) => {
      console.error("Failed to open URL:", err);
    });
  };

  const onRouteDetail = (id: number) => {
    router.push(`/(coupon)/${id}` as Route);
  };

  function onLoad() {
    postMessage("location", data.result.address);
  }

  return (
    <CommonDetail
      images={data.result.images}
      type={SCREEN.STORE}
      name={data.result.name}
      description={data.result.description}
      isLike={data.result.isLike}
      isMine={data.result.isMine}
      appliedCount={0}
      onPressRight={onPressCall}
    >
      <Flex gap={10}>
        <Text size="xl">쿠폰 목록</Text>
        <Flex gap={15}>
          {coupons.map((coupon) => (
            <Card
              key={coupon.id}
              {...coupon}
              type={SCREEN.COUPON}
              onPress={() => onRouteDetail(coupon.id)}
            />
          ))}
        </Flex>
      </Flex>
      <Flex gap={20}>
        <Text size="xl">가게 정보</Text>
        <Content title="가게 위치" content={data.result.address.detailAddress} />
        <WebView ref={webviewRef} style={styles.webview} source={{ uri }} onLoad={onLoad} />
        <Content title="가게 연락처" content={data.result.phoneNumber} />
        <Content title="운영시간" content={data.result.operatingTime} />
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
