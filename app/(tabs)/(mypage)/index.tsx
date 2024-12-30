import { Image } from "expo-image";

import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Button from "@/components/common/button";
import ChipButton from "@/components/common/button/chip-button";
import Card from "@/components/common/card";
import Container from "@/components/common/container";
import Flex from "@/components/common/flex";
import Icon from "@/components/common/icon";
import Text from "@/components/common/text";
import { colors } from "@/constants/color";

const couponList = [
  {
    id: 1,
    host: "호말",
    title: "쿠키 무료 제공 쿠폰",
    duration: "2023.10.17 ~ 2023.10.29",
    source: require("../../../assets/images/homeal.png"),
  },
  {
    id: 2,
    host: "호말",
    title: "전 음료 10%할인 쿠폰",
    duration: "2023.10.17 ~ 2023.10.29",
    source: require("../../../assets/images/homeal.png"),
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
];

export default function MypageScreen() {
  return (
    <ScrollView style={styles.container}>
      <Container as="View" style={styles.contentGap}>
        <Flex direction="row" align="center" justify="between">
          <Flex direction="row" align="center" gap={5}>
            <Image
              source={require("../../../assets/images/default-profile.png")}
              style={{ width: 40, height: 40 }}
            />
            <Text size="xl" weight={700}>
              임광수
            </Text>
          </Flex>
          <ChipButton onPress={() => {}}>
            <Text>프로필 편집</Text>
          </ChipButton>
        </Flex>
        <Flex direction="row" justify="between" gap={10}>
          <Button style={styles.button}>
            <Flex direction="row" align="center" justify="between">
              <Text size="lg" weight={600} style={styles.buttonText}>
                활동 내역
              </Text>
              <Icon.ArrowRight />
            </Flex>
          </Button>
          <Button style={styles.button}>
            <Flex direction="row" align="center" justify="between">
              <Text size="lg" weight={600} style={styles.buttonText}>
                찜한 목록
              </Text>
              <Icon.ArrowRight />
            </Flex>
          </Button>
        </Flex>
      </Container>
      <View style={styles.divider} />
      <Container as="View" style={styles.contentGap}>
        <Flex direction="row" align="center" justify="between">
          <Text size="xl" weight={700}>
            나의 가게
          </Text>
          <ChipButton onPress={() => {}}>
            <Flex direction="row" align="center" gap={5}>
              <Icon.Add size={12} fill={colors.black} />
              <Text>가게 추가</Text>
            </Flex>
          </ChipButton>
        </Flex>
      </Container>
      <View style={styles.divider} />
      <Container as="View" style={styles.contentGap}>
        <Flex direction="row" align="center" justify="between">
          <Text size="xl" weight={700}>
            나의 쿠폰
          </Text>
          <ChipButton onPress={() => {}}>
            <Flex direction="row" align="center" gap={5}>
              <Icon.Add size={12} fill={colors.black} />
              <Text>쿠폰 추가</Text>
            </Flex>
          </ChipButton>
        </Flex>
        <Flex gap={15}>
          {couponList.map((coupon) => (
            <Card key={coupon.id} {...coupon} type="coupon" />
          ))}
        </Flex>
      </Container>
      <View style={styles.divider} />
      <Container as="View" style={styles.contentGap}>
        <Flex direction="row" align="center" justify="between">
          <Text size="xl" weight={700}>
            나의 이벤트
          </Text>
          <ChipButton onPress={() => {}}>
            <Flex direction="row" align="center" gap={5}>
              <Icon.Add size={12} fill={colors.black} />
              <Text>이벤트 추가</Text>
            </Flex>
          </ChipButton>
        </Flex>
        <Flex gap={15}>
          {eventList.map((event) => (
            <Card key={event.id} {...event} />
          ))}
        </Flex>
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentGap: {
    gap: 20,
  },
  button: {
    flex: 1,
    padding: 10,
    boxShadow: "0 0 4 0 rgba(0, 0, 0, 0.26)",
    borderRadius: 10,
  },
  buttonText: {
    color: colors.primary200,
  },
  divider: {
    height: 5,
    width: "100%",
    backgroundColor: colors.gray200,
  },
});
