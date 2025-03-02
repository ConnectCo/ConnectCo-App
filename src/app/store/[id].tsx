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
import { CouponListDTO } from "@/src/models/coupon";
import { StoreInformationDTO } from "@/src/models/store";
import { CardContentProps } from "@/src/types/card";
import { postMessageInstance } from "@/src/utils/webview";

const uri = process.env.EXPO_PUBLIC_DETAIL_MAP_URL!;

export default function StoreScreen() {
  const { id } = useLocalSearchParams();

  const [storeCoupons, storeDetail] = useGetStoreDetail<CouponListDTO, StoreInformationDTO>(+id);

  const webviewRef = useRef<WebView>(null);

  const postMessage = postMessageInstance(webviewRef);

  const onPressCall = () => {
    Linking.openURL(`tel:${storeDetail.data.result.phoneNumber}`).catch((err) => {
      console.error("Failed to open URL:", err);
    });
  };

  const onRouteDetail = (id: number) => {
    router.push(`/(coupon)/${id}` as Route);
  };

  function onLoad() {
    postMessage("location", storeDetail.data.result.address);
  }

  return (
    <CommonDetail
      images={storeDetail.data.result.images}
      type={SCREEN.STORE}
      name={storeDetail.data.result.name}
      description={storeDetail.data.result.description}
      isLike={storeDetail.data.result.isLike}
      isMine={storeDetail.data.result.isMine}
      appliedCount={0}
      onPressRight={onPressCall}
    >
      <Flex gap={10}>
        <Text size="xl">쿠폰 목록</Text>
        <Flex gap={15}>
          {storeCoupons.data.result.coupons.map((coupon: CardContentProps) => (
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
        <Content title="가게 위치" content={storeDetail.data.result.address.detailAddress} />
        <WebView ref={webviewRef} style={styles.webview} source={{ uri }} onLoad={onLoad} />
        <Content title="가게 연락처" content={storeDetail.data.result.phoneNumber} />
        <Content title="운영시간" content={storeDetail.data.result.operatingTime} />
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
