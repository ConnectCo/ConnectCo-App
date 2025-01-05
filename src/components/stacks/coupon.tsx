import { Stack } from "expo-router";

import BackHeader from "../common/header/back-header";

export const couponStacks = () => [
  <Stack.Screen
    key="coupon-add"
    name="(coupon)/add"
    options={{
      header: () => <BackHeader type="primary" title="쿠폰 등록하기" />,
    }}
  />,
  <Stack.Screen
    key="coupon-detail"
    name="(coupon)/[id]"
    options={{ header: () => <BackHeader title="쿠폰 상세보기" /> }}
  />,
  <Stack.Screen
    key="coupon-store"
    name="(coupon)/store/[id]"
    options={{
      header: () => <BackHeader title="가게 상세보기" />,
    }}
  />,
  <Stack.Screen
    key="coupon-suggest"
    name="(coupon)/suggest/[id]"
    options={{
      header: () => <BackHeader type="primary" title="협찬 신청 정보" />,
    }}
  />,
];
