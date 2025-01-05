import { router, useLocalSearchParams } from "expo-router";

import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Button from "@/components/common/button";
import SelectButton from "@/components/common/button/select-button";
import Card, { CardProps } from "@/components/common/card";
import Flex from "@/components/common/flex";
import BackHeader from "@/components/common/header/back-header";
import Text from "@/components/common/text";
import { colors } from "@/constants/color";

type Category = "new" | "completed";

const categories = [
  {
    en: "new" as const,
    ko: "신규",
  },
  {
    en: "completed" as const,
    ko: "완료",
  },
];

const eventList = [
  {
    id: 1,
    host: "한양대학교",
    title: "한양대학교 행사",
    duration: "2023.10.17",
    source: require("../../../assets/static/hanyang.png"),
  },
  {
    id: 2,
    host: "건국대학교",
    title: "산업디자인과 전시회",
    duration: "2023.10.17",
    source: require("../../../assets/static/hanyang.png"),
  },
  {
    id: 3,
    host: "서울대학교",
    title: "서울대학교 축제",
    duration: "2023.11.01",
    source: require("../../../assets/static/hanyang.png"),
  },
  {
    id: 4,
    host: "연세대학교",
    title: "연세대학교 음악회",
    duration: "2023.11.10",
    source: require("../../../assets/static/hanyang.png"),
  },
];

export default function SuggestionScreen() {
  const [selected, setSelected] = useState<Category>("new");
  const { type } = useLocalSearchParams();
  const title = type === "event" ? "이벤트" : "쿠폰";

  const onRouteDetail = (id: number) => {
    // 프로필에 따라 event, counpon 결정
    router.push(`/(event)/${id}`);
  };

  const onReject = (id: number) => {
    // 거절 API 호출
  };

  const onConfirm = (id: number) => {
    // 수락 API 호출
  };

  const renderItem = ({ item }: { item: Omit<CardProps, "onPress"> }) => {
    return (
      <Card {...item} onPress={() => onRouteDetail(item.id)} status={selected}>
        <Flex direction="row" gap={15}>
          <Button style={styles.button} onPress={() => onReject(item.id)}>
            <Text align="center" size="lg" weight={600}>
              거절
            </Text>
          </Button>
          <Button style={[styles.button, styles.confirmButton]} onPress={() => onConfirm(item.id)}>
            <Text style={styles.confirmText} align="center" size="lg" weight={600}>
              수락
            </Text>
          </Button>
        </Flex>
      </Card>
    );
  };

  return (
    <>
      <BackHeader title={`신청 ${title}`} />
      <View style={styles.container}>
        <Flex direction="row" gap={8} style={styles.buttonContainer}>
          {categories.map((category) => (
            <SelectButton
              type={selected === category.en ? "fill" : "outline"}
              onPress={() => setSelected(category.en)}
              key={category.en}
            >
              {category.ko} 신청 내역
            </SelectButton>
          ))}
        </Flex>
        <FlatList
          data={eventList}
          contentContainerStyle={styles.contentContainerStyle}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    zIndex: 0,
  },
  buttonContainer: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 24,
    backgroundColor: colors.white,
  },
  contentContainerStyle: {
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 20,
    gap: 15,
  },
  button: {
    flex: 1,
    paddingVertical: 4,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gray200,
  },
  confirmButton: {
    backgroundColor: colors.primary300,
  },
  confirmText: {
    color: colors.white,
  },
});
