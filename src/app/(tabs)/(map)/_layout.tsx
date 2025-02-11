import { Stack } from "expo-router";

import MainHeader from "@/src/components/common/header/main-header";
import { SCREEN } from "@/src/constants/screen";

export default function MapLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ header: () => <MainHeader title="내 주변" type={SCREEN.MAP} /> }}
      />
    </Stack>
  );
}
