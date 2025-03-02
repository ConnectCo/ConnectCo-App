import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import BackHeader from "@/src/components/common/header/back-header";
import { couponStacks } from "@/src/components/stacks/coupon";
import { eventStacks } from "@/src/components/stacks/event";

import RootProvider from "../components/provider/root-provider";

export const unstable_settings = {
  initialRouteName: "(tabs)/(event)/index",
};

export default function RootLayout() {
  return (
    <RootProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {eventStacks()}
        {couponStacks()}
        <Stack.Screen name="search" options={{ headerShown: false }} />
        <Stack.Screen name="alarm" options={{ header: () => <BackHeader title="알림" /> }} />
        <Stack.Screen name="address" options={{ headerShown: false }} />
        <Stack.Screen name="chat/[chatRoomId]" options={{ headerShown: false }} />
        <Stack.Screen
          name="store/[id]"
          options={{
            header: () => <BackHeader title="가게 상세보기" />,
          }}
        />
        <Stack.Screen
          name="(add)/organization"
          options={{ header: () => <BackHeader title="단체 등록하기" type="primary" /> }}
        />
        <Stack.Screen
          name="(add)/store"
          options={{ header: () => <BackHeader title="가게 등록하기" type="primary" /> }}
        />
      </Stack>
      <StatusBar style="auto" />
    </RootProvider>
  );
}
