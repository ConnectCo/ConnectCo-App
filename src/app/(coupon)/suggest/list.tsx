import { router } from "expo-router";

import { FlatList, StyleSheet, View } from "react-native";

import TextButton from "@/src/components/common/button/text-button";
import Card from "@/src/components/common/card";
import Container from "@/src/components/common/container";
import Flex from "@/src/components/common/flex";
import Text from "@/src/components/common/text";
import { colors } from "@/src/constants/color";
import { useCouponSuggestionStore } from "@/src/lib/zustand/suggestion";

const couponList = [
  {
    id: 1,
    host: "호말",
    title: "쿠키 무료 제공 쿠폰",
    duration: "2023.10.17 ~ 2023.10.29",
    source: require("../../../assets/static/homeal.png"),
  },
  {
    id: 2,
    host: "호말",
    title: "전 음료 10%할인 쿠폰",
    duration: "2023.10.17 ~ 2023.10.29",
    source: require("../../../assets/static/homeal.png"),
  },
  {
    id: 3,
    host: "호말",
    title: "샌드위치 10% 할인 쿠폰",
    duration: "2023.11.01 ~ 2023.11.05",
    source: require("../../../assets/static/homeal.png"),
  },
  {
    id: 4,
    host: "호말",
    title: "아메리카노 무료",
    duration: "2023.11.10 ~ 2023.11.12",
    source: require("../../../assets/static/homeal.png"),
  },
];

export default function SuggestionListScreen() {
  // TODO: 내 쿠폰 목록 API 호출
  const { setSuggestions } = useCouponSuggestionStore();

  const onRouteCreateCoupon = () => {
    router.push("/(coupon)/add");
  };

  const onSelectCoupon = (coupon: unknown) => {
    setSuggestions({
      name: "쿠키 무료 제공 쿠폰",
      description: "왕십리 최고의 카페 호말커피의 맛있는 쿠키 6종 中 1가지를 무료로 제공합니다.",
      priorityTarget: "한양대학교 서울캠퍼스 학생",
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
            어떤 쿠폰을 불러올까요?
          </Text>
        </View>
        <Text style={styles.description}>
          쿠폰을 추가하면 클릭 한 번으로 협찬을 제안할 수 있어요!
        </Text>
      </Flex>
      <FlatList
        data={couponList}
        bounces={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Card {...item} onPress={() => onSelectCoupon(item)} />}
        style={styles.flatListStyle}
        contentContainerStyle={styles.contentContainerStyle}
      />
      <TextButton onPress={onRouteCreateCoupon} type="outline">
        쿠폰 추가하기
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
