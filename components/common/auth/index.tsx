import { useAssets } from "expo-asset";
import { Image } from "expo-image";

import { StyleSheet } from "react-native";

// import { GoogleSignin } from "@react-native-google-signin/google-signin";
// import { login } from "@react-native-kakao/user";
import { colors } from "@/constants/color";

import AppleAuth from "./apple-auth";
import AuthButton from "./auth-button";
import Flex from "../flex";

export default function AuthScreen() {
  const [assets, error] = useAssets([require("../../../assets/static/logo.png")]);

  if (error) console.error(`Error when loading image: ${error}`);

  const onKakaoLogin = async () => {
    try {
      // const res = await login();
    } catch (error) {
      console.error(error);
    }
  };

  const onGoogleLogin = async () => {
    try {
      // await GoogleSignin.hasPlayServices();
      // const response = await GoogleSignin.signIn();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Flex gap={40} align="center" justify="center" style={styles.container}>
      {assets ? <Image source={assets[0]} style={styles.image} /> : null}
      <Flex gap={10}>
        <AppleAuth />
        <AuthButton onPress={onKakaoLogin} type="kakao" />
        <AuthButton onPress={() => console.log("naver")} type="naver" />
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
