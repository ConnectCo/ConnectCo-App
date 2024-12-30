import { Stack } from "expo-router";

import MainHeader from "@/components/common/header/main-header";

export default function MypageLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ header: () => <MainHeader title="마이페이지" type="mypage" /> }}
      />
    </Stack>
  );
}
