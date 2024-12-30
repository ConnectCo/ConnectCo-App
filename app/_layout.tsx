import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// import { initializeKakaoSDK } from "@react-native-kakao/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import BackHeader from "@/components/common/header/back-header";
import SearchHeader from "@/components/search/header";

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

const kakaoNativeAppKey = process.env.EXPO_PUBLIC_NATIVE_APP_KEY || "";

export const unstable_settings = {
  initialRouteName: "(tabs)/(event)/index",
};

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/PretendardVariable.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      // initializeKakaoSDK(kakaoNativeAppKey);
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="search" options={{ header: () => <SearchHeader /> }} />
            <Stack.Screen name="alarm" options={{ header: () => <BackHeader title="알림" /> }} />
          </Stack>
        </GestureHandlerRootView>
      </QueryClientProvider>
      <StatusBar style="auto" />
    </>
  );
}
