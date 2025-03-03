import { useAssets } from "expo-asset";
import { Image } from "expo-image";

import { Alert, StyleSheet } from "react-native";

import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { login } from "@react-native-kakao/user";
import NaverLogin from "@react-native-seoul/naver-login";

import AppleAuth from "@/src/components/common/auth/apple-auth";
import AuthButton from "@/src/components/common/auth/auth-button";
import Flex from "@/src/components/common/flex";
import { colors } from "@/src/constants/color";

import { OAUTH2 } from "../constants/oauth";
import { useOauth2Mutation } from "../lib/tanstack/mutations/auth";

export default function AuthScreen() {
  const [assets, error] = useAssets([require("../assets/static/logo.png")]);
  const oauth2 = useOauth2Mutation();

  if (error) console.error(`Error when loading image: ${error}`);

  const onKakaoLogin = async () => {
    try {
      const res = await login();
      oauth2.mutate({ accessToken: res.accessToken, provider: OAUTH2.KAKAO });
    } catch (error) {
      Alert.alert("카카오 로그인 실패");
      console.error(error);
    }
  };

  const onNaverLogin = async () => {
    const { failureResponse, successResponse } = await NaverLogin.login();
    if (successResponse) {
      return oauth2.mutate({ accessToken: successResponse.accessToken, provider: OAUTH2.NAVER });
    }
    Alert.alert("네이버 로그인 실패");
    console.error(failureResponse);
  };

  const onGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      oauth2.mutate({ accessToken: response.data?.idToken!, provider: OAUTH2.KAKAO });
    } catch (error) {
      Alert.alert("구글 로그인 실패");
      console.error(error);
    }
  };

  return (
    <Flex gap={40} align="center" justify="center" style={styles.container}>
      {assets ? <Image source={assets[0]} style={styles.image} /> : null}
      <Flex gap={10}>
        <AppleAuth mutate={oauth2.mutate} />
        <AuthButton onPress={onKakaoLogin} type="kakao" />
        <AuthButton onPress={onNaverLogin} type="naver" />
        <AuthButton onPress={onGoogleLogin} type="google" />
      </Flex>
    </Flex>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  image: {
    width: 200,
    height: 50,
  },
});
