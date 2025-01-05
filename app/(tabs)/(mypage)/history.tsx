import { Route, router } from "expo-router";

import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import SelectButton from "@/components/common/button/select-button";
import Card from "@/components/common/card";
import Flex from "@/components/common/flex";
import { colors } from "@/constants/color";

const histories = [
  {
    ko: "협찬",
    en: "sponsor",
  },
  {
    ko: "이벤트",
    en: "event",
  },
];

const eventList = [
  {
    id: 1,
    host: "한양대학교",
    title: "한양대학교 행사",
    duration: "2023.10.17 ~ 2023.10.29",
    source: require("../../../assets/images/hanyang.png"),
  },
  {
    id: 2,
    host: "건국대학교",
    title: "산업디자인과 전시회",
    duration: "2023.10.17 ~ 2023.10.29",
    source: require("../../../assets/images/hanyang.png"),
  },
  {
    id: 3,
    host: "서울대학교",
    title: "서울대학교 축제",
    duration: "2023.11.01 ~ 2023.11.05",
    source: require("../../../assets/images/hanyang.png"),
  },
  {
    id: 4,
    host: "연세대학교",
    title: "연세대학교 음악회",
    duration: "2023.11.10 ~ 2023.11.12",
    source: require("../../../assets/images/hanyang.png"),
  },
];

export default function HistoryScreen() {
  const [selectedCategory, setSelectedCategory] = useState("sponsor");

  const onSelectHistory = (history: string) => {
    setSelectedCategory(history);
  };

  const onRouteDetail = (id: number) => {
    // 선택한것이 이벤트인지 쿠폰인지 구별 후 라우팅 시키기
    const path = `/(${selectedCategory})/${id}`;
    router.push(path as Route);
  };

  return (
    <View style={styles.container}>
      <Flex direction="row" gap={8} style={styles.buttonContainer}>
        {histories.map((history) => (
          <SelectButton
            type={selectedCategory === history.en ? "fill" : "outline"}
            onPress={() => onSelectHistory(history.en)}
            key={history.en}
          >
            {history.ko} 신청 내역
          </SelectButton>
        ))}
      </Flex>
      <FlatList
        data={eventList}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Card {...item} onPress={() => onRouteDetail(item.id)} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
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
});
