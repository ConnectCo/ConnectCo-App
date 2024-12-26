import * as Linking from "expo-linking";

import { StyleSheet } from "react-native";

import Button from "@/components/common/button";
import Card from "@/components/common/card";
import Container from "@/components/common/container";
import Flex from "@/components/common/flex";
import BackHeader from "@/components/common/header/back-header";
import Icon from "@/components/common/icon";
import Text from "@/components/common/text";
import { colors } from "@/constants/color";

const eventList = [
  {
    id: 1,
    host: "한양대학교",
    title: "한양대학교 행사",
    duration: "2023.10.17 ~ 2023.10.29",
    source: require("../../../../assets/images/hanyang.png"),
  },
  {
    id: 2,
    host: "건국대학교",
    title: "산업디자인과 전시회",
    duration: "2023.10.17 ~ 2023.10.29",
    source: require("../../../../assets/images/hanyang.png"),
  },
  {
    id: 3,
    host: "서울대학교",
    title: "서울대학교 축제",
    duration: "2023.11.01 ~ 2023.11.05",
    source: require("../../../../assets/images/hanyang.png"),
  },
  {
    id: 4,
    host: "연세대학교",
    title: "연세대학교 음악회",
    duration: "2023.11.10 ~ 2023.11.12",
    source: require("../../../../assets/images/hanyang.png"),
  },
];

export default function CollegeScreen() {
  const openURL = (url: string) => {
    Linking.openURL(url).catch((err) => {
      console.error("Failed to open URL:", err);
    });
  };

  return (
    <>
      <BackHeader title="한양대학교">
        <Flex direction="row" justify="center" gap={20}>
          <Flex gap={4} align="center">
            <Button onPress={() => openURL("https://www.hanyang.ac.kr")} style={styles.button}>
              <Icon.Home />
            </Button>
            <Text size="sm">홈페이지</Text>
          </Flex>
          <Flex gap={4} align="center">
            <Button
              onPress={() => openURL("https://www.hanyang.ac.kr/web/www/-33")}
              style={styles.button}
            >
              <Icon.Calendar />
            </Button>
            <Text size="sm">학사일정</Text>
          </Flex>
        </Flex>
      </BackHeader>
      <Container as="ScrollView">
        <Flex gap={20}>
          <Flex direction="row" justify="between" align="center">
            <Text size="xxl" weight={600}>
              이벤트 목록
            </Text>
            <Button>
              <Flex direction="row" align="center" gap={4}>
                <Icon.Switch />
                <Text>추천순</Text>
              </Flex>
            </Button>
          </Flex>
          <Flex gap={16}>
            {eventList.map((event) => (
              <Card key={event.id} {...event} />
            ))}
          </Flex>
        </Flex>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 5,
    borderRadius: 15,
    backgroundColor: colors.white,
    boxShadow: "0 0 2 1 rgba(0, 0, 0, 0.25)",
  },
});
