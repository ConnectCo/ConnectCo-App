import { StyleSheet } from "react-native";

import { SCREEN } from "@/src/constants/screen";

import Flex from "../flex";
import Text from "../text";

interface EmptyProps {
  type: SCREEN;
}

export default function Empty({ type }: EmptyProps) {
  const eventScreen = type === SCREEN.EVENT ? "이벤트" : "쿠폰";

  return (
    <Flex style={styles.emptyContainer}>
      <Text size="lg" weight={600} style={{ marginBottom: 10 }}>
        데이터가 없습니다.
      </Text>
      <Text>새로운 {eventScreen}를 기다려주세요!</Text>
    </Flex>
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
});
