import { StyleSheet } from "react-native";

import Button from "@/components/common/button";
import Card from "@/components/common/card";
import Container from "@/components/common/container";
import Flex from "@/components/common/flex";
import Icon from "@/components/common/icon";
import Text from "@/components/common/text";

interface ItemProps {
  id: number;
  title: string;
  host: string;
  duration: string;
  source: string;
}

interface MainScreenProps {
  items: ItemProps[];
  type?: "event" | "coupon";
}

export default function MainScreen({ items, type = "event" }: MainScreenProps) {
  const eventScreen = type === "event" ? "이벤트" : "쿠폰";

  return (
    <Container as="ScrollView" contentContainerStyle={styles.container}>
      <Flex gap={30}>
        <Flex gap={20}>
          <Flex direction="row" justify="between" align="center">
            <Text size="xl" weight={600}>
              추천 {eventScreen}
            </Text>
            <Button>
              <Icon.Reset />
            </Button>
          </Flex>
          <Flex gap={16}>
            {items.slice(0, 2).map((item) => (
              <Card key={item.id} type={type} {...item} />
            ))}
          </Flex>
        </Flex>
        <Flex gap={20}>
          <Flex direction="row" justify="between" align="center">
            <Text size="xl" weight={600}>
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
              <Card key={item.id} type={type} {...item} />
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
