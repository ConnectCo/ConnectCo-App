import { Stack } from "expo-router";

import MainHeader from "@/src/components/common/header/main-header";
import { SCREEN } from "@/src/constants/screen";

export default function CouponLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ header: () => <MainHeader title="쿠폰" type={SCREEN.COUPON} /> }}
      />
    </Stack>
  );
}
