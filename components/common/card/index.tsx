import { Image } from "expo-image";

import { Dimensions, StyleSheet, View } from "react-native";

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
  children?: React.ReactNode;
  status?: "new" | "completed" | "none";
  onPress: () => void;
}

export default function Card({
  id,
  title,
  host,
  duration,
  source,
  coupon,
  type = "event",
  children,
  status = "none",
  onPress,
}: CardProps) {
  const isCouponNeeded = type === "store";
  const isSuggestionScreen = status !== "none";
  const isNew = status === "new";
  const isCompleted = status === "completed";

  const descriptionByType = isCompleted
    ? "수락 일자"
    : isNew
      ? "신청 일자"
      : isCouponNeeded
        ? "신청 가능 쿠폰 갯수"
        : type === "event"
          ? "이벤트 기간"
          : "신청 마감일";
  const backgroundColor = !isSuggestionScreen
    ? colors.white
    : isNew
      ? colors.primary100
      : colors.gray100;

  const additionalInfo = isCouponNeeded ? coupon : duration;

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Button onPress={onPress}>
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
      {isNew && children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 10,
    boxShadow: "0 0 5 0.1 rgba(0, 0, 0, 0.26)",
    elevation: 5,
    gap: 10,
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
