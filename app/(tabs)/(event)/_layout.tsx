import { Stack } from "expo-router";

import BackHeader from "@/components/common/header/back-header";
import MainHeader from "@/components/common/header/main-header";

export default function EventLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => <MainHeader title="이벤트" />,
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          header: () => <BackHeader title="이벤트 상세보기" />,
        }}
      />
      <Stack.Screen
        name="college/index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
