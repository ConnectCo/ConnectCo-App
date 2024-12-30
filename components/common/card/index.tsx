import { Image } from "expo-image";
import { Route, useRouter } from "expo-router";

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
  source: string;
  duration?: string;
  coupon?: number;
  type?: "event" | "coupon" | "store";
}

export default function Card({
  id,
  title,
  host,
  duration,
  source,
  type = "event",
  coupon,
}: CardProps) {
  const router = useRouter();

  const isCouponNeeded = type === "store";
  const descriptionByType = isCouponNeeded
    ? "신청 가능 쿠폰 갯수"
    : type === "event"
      ? "이벤트 기간"
      : "신청 마감일";

  const additionalInfo = isCouponNeeded ? coupon : duration;

  const path = isCouponNeeded ? `/(coupon)/store/${id}` : `/(${type})/${id}`;

  const onRouteDetail = () => {
    router.push(path as Route);
  };

  return (
    <Button style={styles.container} onPress={onRouteDetail}>
      <Flex direction="row" align="center" gap={24}>
        <Image source={source} style={styles.image} />
        <Flex>
          <Text size="sm" weight={700} style={styles.host}>
            {host}
          </Text>
          <Text size="lg" weight={600} style={[styles.title, styles.duration]} numberOfLines={1}>
            {title}
          </Text>
          <Text size="sm" numberOfLines={1} style={styles.duration}>
            {descriptionByType} - {additionalInfo}
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
