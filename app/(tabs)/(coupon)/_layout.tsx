import { Stack } from "expo-router";

import BackHeader from "@/components/common/header/back-header";
import MainHeader from "@/components/common/header/main-header";

export default function CouponLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ header: () => <MainHeader title="쿠폰" /> }} />
      <Stack.Screen name="[id]" options={{ header: () => <BackHeader title="쿠폰 상세보기" /> }} />
    </Stack>
  );
}
