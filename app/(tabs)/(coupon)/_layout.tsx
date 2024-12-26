import { Stack } from "expo-router";

import MainHeader from "@/components/common/header/main-header";

export default function CouponLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ header: () => <MainHeader title="쿠폰" /> }} />
    </Stack>
  );
}
