import { Image } from "expo-image";

import { Dimensions, StyleSheet, View } from "react-native";

import { colors } from "@/src/constants/color";
import { SCREEN } from "@/src/constants/screen";
import { CardProps } from "@/src/types/card";

import Button from "../button";
import Flex from "../flex";
import Text from "../text";

const { width } = Dimensions.get("screen");

export default function Card({
  id,
  name,
  host,
  expiredAt,
  thumbnail,
  type = SCREEN.EVENT,
  children,
  status = "none",
  onPress,
}: CardProps) {
  const isSuggestionScreen = status !== "none";
  const isNew = status === "new";
  const isCompleted = status === "completed";

  const descriptionByType = isCompleted
    ? "수락 일자"
    : isNew
      ? "신청 일자"
      : type === SCREEN.EVENT
        ? "이벤트 기간"
        : "신청 마감일";
  const backgroundColor = !isSuggestionScreen
    ? colors.white
    : isNew
      ? colors.primary100
      : colors.gray100;

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Button onPress={onPress}>
        <Flex direction="row" align="center" gap={24}>
          <Image source={thumbnail} style={styles.image} />
          <Flex>
            <Text size="sm" weight={700} style={styles.host}>
              {host}
            </Text>
            <Text size="lg" weight={600} style={[styles.name, styles.expiredAt]} numberOfLines={1}>
              {name}
            </Text>
            <Text size="sm" numberOfLines={1} style={styles.expiredAt}>
              {descriptionByType} - {expiredAt}
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
  name: {
    marginTop: 4,
    marginBottom: 8,
  },
  expiredAt: {
    width: width - 148,
  },
});
