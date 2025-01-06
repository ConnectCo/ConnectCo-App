import { useAssets } from "expo-asset";
import { Image } from "expo-image";

import { Dimensions, StyleSheet, View } from "react-native";

import { colors } from "@/src/constants/color";

import Button from "../button";
import Text from "../text";

interface AuthButtonProps {
  onPress: () => void;
  type: "google" | "kakao" | "naver";
}

const { width } = Dimensions.get("window");

export default function AuthButton({ onPress, type = "kakao" }: AuthButtonProps) {
  const logo =
    type === "google"
      ? { asset: require("../../../assets/static/google-logo.png"), name: "Google" }
      : type === "kakao"
        ? { asset: require("../../../assets/static/kakao-logo.png"), name: "카카오" }
        : { asset: require("../../../assets/static/naver-logo.png"), name: "네이버" };
  const isKakao = type === "kakao";

  const [assets, error] = useAssets([logo.asset]);

  if (error) console.error(`Error when loading image: ${error}`);

  return (
    <View style={[styles.container, { backgroundColor: colors[type] }]}>
      <Button style={styles.button} onPress={onPress}>
        {assets ? <Image source={assets[0]} style={styles.image} /> : null}
        <Text size="lg" weight={500} style={{ color: isKakao ? colors.black : colors.white }}>
          {logo.name}로 로그인
        </Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width - 80,
    height: 44,
    justifyContent: "center",
    borderRadius: 5,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  image: {
    width: 24,
    height: 24,
  },
});
