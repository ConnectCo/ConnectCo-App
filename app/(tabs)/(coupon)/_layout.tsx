import { Stack } from "expo-router";

import BackHeader from "@/components/common/header/back-header";
import MainHeader from "@/components/common/header/main-header";

export default function CouponLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ header: () => <MainHeader title="쿠폰" type="coupon" /> }}
      />
      <Stack.Screen
        name="add"
        options={{
          header: () => <BackHeader type="primary" title="쿠폰 등록하기" />,
        }}
      />
      <Stack.Screen name="[id]" options={{ header: () => <BackHeader title="쿠폰 상세보기" /> }} />
      <Stack.Screen
        name="store/[id]"
        options={{
          header: () => <BackHeader title="가게 상세보기" />,
        }}
      />
      <Stack.Screen
        name="suggest/[id]"
        options={{
          header: () => <BackHeader type="primary" title="협찬 제안 정보" />,
        }}
      />
    </Stack>
  );
}
