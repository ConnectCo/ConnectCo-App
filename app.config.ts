import { ConfigContext, ExpoConfig } from "@expo/config";

const kakaoNativeAppKey = process.env.EXPO_PUBLIC_NATIVE_APP_KEY;
const bundleIdentifier = process.env.EXPO_PUBLIC_APP_BUNDLE_IDENTIFIER;
const iosUrlScheme = process.env.EXPO_PUBLIC_IOS_URL_SCHEME;

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "connectco",
  slug: "connectco",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./src/assets/images/icon.png",
  scheme: bundleIdentifier,
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
    bundleIdentifier: bundleIdentifier,
    usesAppleSignIn: true,
    infoPlist: {
      CFBundleURLTypes: [
        {
          CFBundleURLSchemes: [iosUrlScheme],
        },
      ],
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./src/assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package: bundleIdentifier,
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./src/assets/images/favicon.png",
  },
  plugins: [
    "expo-apple-authentication",
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./src/assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
    ],
    [
      "expo-image-picker",
      {
        photosPermission: "사용자의 사진에 액세스하려면 권한이 필요합니다.",
      },
    ],
    [
      "expo-asset",
      {
        assets: ["./src/assets/static"],
      },
    ],
    [
      "expo-location",
      {
        locationAlwaysAndWhenInUsePermission: "connectco가 사용자의 위치에 접근하고자 합니다.",
      },
    ],
    [
      "expo-build-properties",
      {
        android: {
          extraMavenRepos: ["https://devrepo.kakao.com/nexus/content/groups/public/"],
          newArchEnabled: true,
        },
        ios: {
          newArchEnabled: true,
        },
      },
    ],
    [
      "@react-native-kakao/core",
      {
        nativeAppKey: kakaoNativeAppKey,
        android: {
          authCodeHandlerActivity: true,
        },
        ios: {
          handleKakaoOpenUrl: true,
        },
      },
    ],
    [
      "@react-native-google-signin/google-signin",
      {
        iosUrlScheme,
      },
    ],
    [
      "@react-native-seoul/naver-login",
      {
        urlScheme: bundleIdentifier,
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
});
