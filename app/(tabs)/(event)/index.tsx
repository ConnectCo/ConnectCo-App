import { StyleSheet } from "react-native";

import Button from "@/components/common/button";
import Card from "@/components/common/card";
import Container from "@/components/common/container";
import Flex from "@/components/common/flex";
import Icon from "@/components/common/icon";
import Text from "@/components/common/text";

const eventList = [
  {
    id: 1,
    college: "한양대학교",
    title: "한양대학교 행사",
    duration: "2023.10.17 ~ 2023.10.29",
  },
  {
    id: 2,
    college: "건국대학교",
    title: "산업디자인과 전시회",
    duration: "2023.10.17 ~ 2023.10.29",
  },
  {
    id: 3,
    college: "서울대학교",
    title: "서울대학교 축제",
    duration: "2023.11.01 ~ 2023.11.05",
  },
  {
    id: 4,
    college: "연세대학교",
    title: "연세대학교 음악회",
    duration: "2023.11.10 ~ 2023.11.12",
  },
];

export default function EventScreen() {
  return (
    <Container as="ScrollView" contentContainerStyle={styles.container}>
      <Flex gap={30}>
        <Flex gap={20}>
          <Flex direction="row" justify="between" align="center">
            <Text size="xl" weight={600}>
              추천 이벤트
            </Text>
            <Button>
              <Icon.Reset />
            </Button>
          </Flex>
          <Flex gap={16}>
            {eventList.slice(0, 2).map((event) => (
              <Card key={event.id} {...event} />
            ))}
          </Flex>
        </Flex>
        <Flex gap={20}>
          <Flex direction="row" justify="between" align="center">
            <Text size="xl" weight={600}>
              이벤트 목록
            </Text>
            <Button>
              <Flex direction="row" align="center" gap={4}>
                <Icon.Switch />
                <Text>거리순</Text>
              </Flex>
            </Button>
          </Flex>
          <Flex gap={16}>
            {eventList.map((event) => (
              <Card key={event.id} {...event} />
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
