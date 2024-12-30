import { Stack } from "expo-router";

import BackHeader from "@/components/common/header/back-header";
import MainHeader from "@/components/common/header/main-header";

export default function MypageLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ header: () => <MainHeader title="마이페이지" type="mypage" /> }}
      />
      <Stack.Screen
        name="add"
        options={{ header: () => <BackHeader title="가게 등록하기" type="primary" /> }}
      />
    </Stack>
  );
}
