import { router } from "expo-router";

import { FlatList, StyleSheet, View } from "react-native";

import TextButton from "@/src/components/common/button/text-button";
import Card from "@/src/components/common/card";
import Container from "@/src/components/common/container";
import Flex from "@/src/components/common/flex";
import Text from "@/src/components/common/text";
import { colors } from "@/src/constants/color";
import { useEventSuggestionStore } from "@/src/lib/zustand/suggestion";

const eventList = [
  {
    id: 1,
    host: "한양대학교",
    title: "한양대학교 행사",
    duration: "2023.10.17 ~ 2023.10.29",
    source: require("../../../assets/static/hanyang.png"),
  },
  {
    id: 2,
    host: "건국대학교",
    title: "산업디자인과 전시회",
    duration: "2023.10.17 ~ 2023.10.29",
    source: require("../../../assets/static/hanyang.png"),
  },
  {
    id: 3,
    host: "서울대학교",
    title: "서울대학교 축제",
    duration: "2023.11.01 ~ 2023.11.05",
    source: require("../../../assets/static/hanyang.png"),
  },
  {
    id: 4,
    host: "연세대학교",
    title: "연세대학교 음악회",
    duration: "2023.11.10 ~ 2023.11.12",
    source: require("../../../assets/static/hanyang.png"),
  },
];

export default function SuggestionListScreen() {
  // TODO: 내 쿠폰 목록 API 호출
  const { setSuggestions } = useEventSuggestionStore();

  const onRouteCreateEvent = () => {
    router.push("/(event)/add");
  };

  const onSelectEvent = (event: unknown) => {
    setSuggestions({
      name: "한양패스 이벤트",
      duration: "2023.12.29",
      description:
        "오직 한양인을 위한 상권 제휴, HANYANG PASS 한양대학교 서울캠퍼스 재학생 및 휴학생에게 제공되는 협찬권입니다.",
      priorityTarget: "한양대학교 근처 음식점",
    });
    router.back();
  };

  return (
    <Container as="View" style={styles.container}>
      <Flex gap={10}>
        <View>
          <Text size="xxl" weight={600}>
            OOO님
          </Text>
          <Text size="xxl" weight={600}>
            어떤 이벤트를 불러올까요?
          </Text>
        </View>
        <Text style={styles.description}>
          이벤트를 추가하면 클릭 한 번으로 협찬을 제안할 수 있어요!
        </Text>
      </Flex>
      <FlatList
        data={eventList}
        bounces={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Card {...item} onPress={() => onSelectEvent(item)} />}
        style={styles.flatListStyle}
        contentContainerStyle={styles.contentContainerStyle}
      />
      <TextButton onPress={onRouteCreateEvent} type="outline">
        이벤트 추가하기
      </TextButton>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },
  description: {
    color: colors.gray500,
  },
  flatListStyle: {
    overflow: "visible",
    flexGrow: 0,
  },
  contentContainerStyle: {
    gap: 20,
  },
});
