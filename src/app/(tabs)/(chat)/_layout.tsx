import { Stack } from "expo-router";

import MainHeader from "@/src/components/common/header/main-header";
import { SCREEN } from "@/src/constants/screen";

export default function ChatLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ header: () => <MainHeader title="채팅" type={SCREEN.CHAT} /> }}
      />
    </Stack>
  );
}
