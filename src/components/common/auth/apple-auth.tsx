import * as AppleAuthentication from "expo-apple-authentication";

import { Alert, Dimensions, Platform, StyleSheet } from "react-native";

import { OAUTH2 } from "@/src/constants/auth";

const { width } = Dimensions.get("window");

interface AppleAuthProps {
  mutate: ({ accessToken, provider }: { accessToken: string; provider: OAUTH2 }) => void;
}

export default function AppleAuth({ mutate }: AppleAuthProps) {
  const platform = Platform.OS;
  const isIOS = platform === "ios";

  return isIOS ? (
    <AppleAuthentication.AppleAuthenticationButton
      buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
      buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
      cornerRadius={5}
      style={styles.button}
      onPress={async () => {
        try {
          const credential = await AppleAuthentication.signInAsync({
            requestedScopes: [
              AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
              AppleAuthentication.AppleAuthenticationScope.EMAIL,
            ],
          });
          mutate({ accessToken: credential.identityToken!, provider: OAUTH2.APPLE });
        } catch (e: any) {
          if (e.code === "ERR_REQUEST_CANCELED") {
            Alert.alert("애플 로그인 취소");
          } else {
            Alert.alert("애플 로그인 실패");
          }
        }
      }}
    />
  ) : null;
}

const styles = StyleSheet.create({
  button: {
    width: width - 80,
    height: 44,
  },
});
