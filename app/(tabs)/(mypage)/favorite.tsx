import { Route, router } from "expo-router";

import { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import SelectButton from "@/components/common/button/select-button";
import Card from "@/components/common/card";
import Container from "@/components/common/container";
import Flex from "@/components/common/flex";

const categories = [
  {
    ko: "이벤트",
    en: "event",
  },
  {
    ko: "쿠폰",
    en: "coupon",
  },
  {
    ko: "가게",
    en: "store",
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

export default function FavoriteScreen() {
  const [selectedCategory, setSelectedCategory] = useState("event");

  const onSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const onRouteDetail = (id: number) => {
    const path =
      selectedCategory === "store" ? `/(coupon)/store/${id}` : `/(${selectedCategory})/${id}`;
    router.push(path as Route);
  };

  return (
    <Container as="View">
      <Flex direction="row" gap={8}>
        {categories.map((category) => (
          <SelectButton
            type={selectedCategory === category.en ? "fill" : "outline"}
            onPress={() => onSelectCategory(category.en)}
            key={category.en}
          >
            {category.ko}
          </SelectButton>
        ))}
      </Flex>
      <Flex>
        <FlatList
          data={eventList}
          style={styles.flatList}
          contentContainerStyle={styles.contentContainerStyle}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Card {...item} onPress={() => onRouteDetail(item.id)} />}
          bounces={false}
        />
      </Flex>
    </Container>
  );
}

const styles = StyleSheet.create({
  flatList: {
    overflow: "visible",
  },
  contentContainerStyle: {
    paddingVertical: 24,
    gap: 15,
  },
});
