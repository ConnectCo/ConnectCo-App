import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// import NaverLogin from "@react-native-seoul/naver-login";
// import { GoogleSignin } from "@react-native-google-signin/google-signin";
// import { initializeKakaoSDK } from "@react-native-kakao/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import BackHeader from "@/components/common/header/back-header";
import SearchHeader from "@/components/search/header";
import { couponStacks } from "@/components/stacks/coupon";
import { eventStacks } from "@/components/stacks/event";

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

const consumerKey = process.env.EXPO_PUBLIC_NAVER_CLIEND_ID || "";
const consumerSecret = process.env.EXPO_PUBLIC_NAVER_CLIEND_SECRET || "";
const appName = process.env.EXPO_PUBLIC_APP_NAME || "";
const serviceUrlSchemeIOS = process.env.EXPO_PUBLIC_APP_BUNDLE_IDENTIFIER || "";
const kakaoNativeAppKey = process.env.EXPO_PUBLIC_NATIVE_APP_KEY || "";
const iosClientId = process.env.EXPO_PUBLIC_GOOGLE_CLIEND_ID || "";

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
      // NaverLogin.initialize({
      //   appName,
      //   consumerKey,
      //   consumerSecret,
      //   serviceUrlSchemeIOS,
      //   disableNaverAppAuthIOS: true,
      // });
      // GoogleSignin.configure({
      //   iosClientId,
      // });
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
            {eventStacks()}
            {couponStacks()}
            <Stack.Screen name="search" options={{ header: () => <SearchHeader /> }} />
            <Stack.Screen name="alarm" options={{ header: () => <BackHeader title="알림" /> }} />
          </Stack>
        </GestureHandlerRootView>
      </QueryClientProvider>
      <StatusBar style="auto" />
    </>
  );
}
