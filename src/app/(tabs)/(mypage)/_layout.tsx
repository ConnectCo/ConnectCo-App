import { Stack } from "expo-router";

import BackHeader from "@/src/components/common/header/back-header";
import MainHeader from "@/src/components/common/header/main-header";

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
      <Stack.Screen name="favorite" options={{ header: () => <BackHeader title="찜한 목록" /> }} />
      <Stack.Screen name="history" options={{ header: () => <BackHeader title="활동 내역" /> }} />
      <Stack.Screen name="suggestion" options={{ headerShown: false }} />
    </Stack>
  );
}
