import { Route, router } from "expo-router";

import { StyleSheet } from "react-native";

import Button from "@/src/components/common/button";
import Card, { CardProps } from "@/src/components/common/card";
import Container from "@/src/components/common/container";
import Flex from "@/src/components/common/flex";
import Icon from "@/src/components/common/icon";
import Text from "@/src/components/common/text";

interface MainScreenProps {
  items: CardProps[];
  type?: "event" | "coupon";
}

export default function MainScreen({ items, type = "event" }: MainScreenProps) {
  const eventScreen = type === "event" ? "이벤트" : "쿠폰";

  const onRouteDetail = (id: number) => {
    router.push(`/(${type})/${id}` as Route);
  };

  return (
    <Container as="ScrollView" contentContainerStyle={styles.container}>
      <Flex gap={30}>
        <Flex gap={20}>
          <Flex direction="row" justify="between" align="center">
            <Text size="xxl" weight={600}>
              추천 {eventScreen}
            </Text>
            <Button>
              <Icon.Reset />
            </Button>
          </Flex>
          <Flex gap={16}>
            {items.slice(0, 2).map((item) => (
              <Card key={item.id} type={type} {...item} onPress={() => onRouteDetail(item.id)} />
            ))}
          </Flex>
        </Flex>
        <Flex gap={20}>
          <Flex direction="row" justify="between" align="center">
            <Text size="xxl" weight={600}>
              {eventScreen} 목록
            </Text>
            <Button>
              <Flex direction="row" align="center" gap={4}>
                <Icon.Switch />
                <Text>거리순</Text>
              </Flex>
            </Button>
          </Flex>
          <Flex gap={16}>
            {items.map((item) => (
              <Card key={item.id} type={type} {...item} onPress={() => onRouteDetail(item.id)} />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
});
