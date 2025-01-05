import { Stack } from "expo-router";

import MainHeader from "@/src/components/common/header/main-header";

export default function EventLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => <MainHeader title="이벤트" />,
        }}
      />
    </Stack>
  );
}
