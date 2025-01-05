import { StyleSheet } from "react-native";

import { colors } from "@/src/constants/color";

import ChipButton from "../common/button/chip-button";
import Card, { CardProps } from "../common/card";
import Container from "../common/container";
import Flex from "../common/flex";
import Icon from "../common/icon";
import Text from "../common/text";

interface MyItemsProps {
  type: "event" | "store" | "coupon";
  items: Omit<CardProps, "onPress">[];
  onPressAdd: () => void;
}

export default function MyItems({ type = "event", items, onPressAdd }: MyItemsProps) {
  const name = type === "event" ? "이벤트" : type === "store" ? "가게" : "쿠폰";

  const onRoute = () => {
    // 디자인 바뀌면 라우팅 설정하기
  };

  return (
    <Container as="View" style={styles.container}>
      <Flex direction="row" align="center" justify="between">
        <Text size="xl" weight={700}>
          나의 {name}
        </Text>
        <ChipButton onPress={onPressAdd}>
          <Flex direction="row" align="center" gap={5}>
            <Icon.Add size={12} fill={colors.black} />
            <Text>{name} 추가</Text>
          </Flex>
        </ChipButton>
      </Flex>
      <Flex gap={15}>
        {items.length === 0 ? (
          <Text>나의 {name} 데이터가 없어요 :(</Text>
        ) : (
          items.map((item) => (
            <Card key={item.id} {...item} type={type} onPress={() => onRoute()} />
          ))
        )}
      </Flex>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
});
