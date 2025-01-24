import { useFonts } from "expo-font";
import * as Notifications from "expo-notifications";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import messaging from "@react-native-firebase/messaging";
// import NaverLogin from "@react-native-seoul/naver-login";
// import { GoogleSignin } from "@react-native-google-signin/google-signin";
// import { initializeKakaoSDK } from "@react-native-kakao/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import BackHeader from "@/src/components/common/header/back-header";
import SearchHeader from "@/src/components/search/header";
import { couponStacks } from "@/src/components/stacks/coupon";
import { eventStacks } from "@/src/components/stacks/event";

import { requestUserPermission, sendFCMv1Notification } from "../utils/fcm";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

const consumerKey = process.env.EXPO_PUBLIC_NAVER_CLIEND_ID || "";
const consumerSecret = process.env.EXPO_PUBLIC_NAVER_CLIEND_SECRET || "";
const appName = process.env.EXPO_PUBLIC_NAVER_APP_NAME || "";
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
      // Foreground 알림 리스너
      const foregroundSubscription = Notifications.addNotificationReceivedListener(
        (notification) => {
          console.log("Foreground 알림 수신:", notification);
        }
      );

      // Background 알림 리스너
      const backgroundSubscription = Notifications.addNotificationResponseReceivedListener(
        (response) => {
          console.log("백그라운드 알림 응답:", response);
        }
      );

      const unsubscribe = messaging().onMessage(async (remoteMessage) => {
        console.log("FCM Notification Received:", remoteMessage);
      });

      (async () => {
        await requestUserPermission();
        await sendFCMv1Notification();
      })();

      return () => {
        unsubscribe();
        foregroundSubscription.remove();
        backgroundSubscription.remove();
      };
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
            <Stack.Screen name="address" options={{ headerShown: false }} />
          </Stack>
        </GestureHandlerRootView>
      </QueryClientProvider>
      <StatusBar style="auto" />
    </>
  );
}
