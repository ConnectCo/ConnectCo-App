import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";

import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import messaging from "@react-native-firebase/messaging";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { initializeKakaoSDK } from "@react-native-kakao/core";
import NaverLogin from "@react-native-seoul/naver-login";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@/src/lib/tanstack/quries";
import { requestUserPermission } from "@/src/utils/fcm";

SplashScreen.preventAutoHideAsync();

const consumerKey = process.env.EXPO_PUBLIC_NAVER_CLIEND_ID || "";
const consumerSecret = process.env.EXPO_PUBLIC_NAVER_CLIEND_SECRET || "";
const appName = process.env.EXPO_PUBLIC_NAVER_APP_NAME || "";
const serviceUrlSchemeIOS = process.env.EXPO_PUBLIC_APP_BUNDLE_IDENTIFIER || "";
const kakaoNativeAppKey = process.env.EXPO_PUBLIC_NATIVE_APP_KEY || "";
const iosClientId = process.env.EXPO_PUBLIC_GOOGLE_CLIEND_ID || "";

// async function enableMocking() {
//   if (!__DEV__) {
//     return;
//   }

//   await import("../../../msw.polyfills");
//   const { server } = await import("../../mocks/server");
//   server.listen();
// }

// enableMocking().then(() => {
//   console.log("enableMocking");
// });

export default function RootProvider({ children }: { children: React.ReactNode }) {
  const [loaded] = useFonts({
    SpaceMono: require("../../assets/fonts/PretendardVariable.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      NaverLogin.initialize({
        appName,
        consumerKey,
        consumerSecret,
        serviceUrlSchemeIOS,
        disableNaverAppAuthIOS: true,
      });
      GoogleSignin.configure({
        iosClientId,
      });
      initializeKakaoSDK(kakaoNativeAppKey);

      const unsubscribe = messaging().onMessage(async (remoteMessage) => {
        console.log("FCM Notification Received:", remoteMessage);
      });

      (async () => {
        await requestUserPermission();
      })();

      return () => {
        unsubscribe();
      };
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView>{children}</GestureHandlerRootView>
    </QueryClientProvider>
  );
}
