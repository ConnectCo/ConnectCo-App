import * as AppleAuthentication from "expo-apple-authentication";

import { Dimensions, Platform, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export default function AppleAuth() {
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
          console.log(credential);
          // signed in
        } catch (e: any) {
          if (e.code === "ERR_REQUEST_CANCELED") {
            // handle that the user canceled the sign-in flow
          } else {
            // handle other errors
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
