import { Image } from "expo-image";
import { useRouter } from "expo-router";

import { Dimensions, StyleSheet } from "react-native";

import { colors } from "@/constants/color";

import Button from "../button";
import Flex from "../flex";
import Text from "../text";

const { width } = Dimensions.get("screen");

export interface CardProps {
  id: number;
  title: string;
  host: string;
  duration: string;
  source: string;
  type?: "event" | "coupon";
}

export default function Card({ id, title, host, duration, source, type = "event" }: CardProps) {
  const router = useRouter();
  const durationByScreen = type === "event" ? "이벤트 기간" : "신청 마감일";

  const onRouteDetail = () => {
    router.push(`/(${type})/${id}`);
  };

  return (
    <Button style={styles.container} onPress={onRouteDetail}>
      <Flex direction="row" align="center" gap={24}>
        <Image source={source} style={styles.image} />
        <Flex>
          <Text size="sm" weight={700} style={styles.host}>
            {host}
          </Text>
          <Text size="lg" weight={600} style={styles.title}>
            {title}
          </Text>
          <Text size="sm" numberOfLines={1} style={styles.duration}>
            {durationByScreen} - {duration}
          </Text>
        </Flex>
      </Flex>
    </Button>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 10,
    boxShadow: "0 0 5 0.1 rgba(0, 0, 0, 0.26)",
    elevation: 5,
  },
  image: {
    width: 60,
    height: 60,
  },
  host: {
    color: colors.gray500,
  },
  title: {
    marginTop: 4,
    marginBottom: 8,
  },
  duration: {
    width: width - 148,
  },
});
