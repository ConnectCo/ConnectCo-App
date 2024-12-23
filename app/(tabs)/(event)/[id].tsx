import { useLocalSearchParams, useRouter } from "expo-router";

import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Button from "@/components/common/button";
import TextButton from "@/components/common/button/text-button";
import Container from "@/components/common/container";
import Flex from "@/components/common/flex";
import Icon from "@/components/common/icon";
import Text from "@/components/common/text";
import Content from "@/components/event/content";
import ImageScroll from "@/components/event/image-scroll";
import { colors } from "@/constants/color";

const images = [
  {
    id: 1,
    source: require("../../../assets/images/event.png"),
  },
  {
    id: 2,
    source: require("../../../assets/images/event.png"),
  },
  {
    id: 3,
    source: require("../../../assets/images/event.png"),
  },
];

export default function DetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  // id를 이용해서 이벤트 상세 내용 불러오기

  const [selected, setSelected] = useState(false);

  const onRouteCollegeProfile = () => {
    router.push("/(tabs)/(event)/college");
  };

  const onSelect = () => {
    setSelected((prev) => !prev);
  };

  return (
    <ScrollView style={styles.container}>
      <ImageScroll images={images} />
      <Button onPress={onRouteCollegeProfile}>
        <Flex direction="row" align="center" justify="between" style={styles.collegeWrap}>
          <Text weight={600} style={styles.college}>
            한양대학교
          </Text>
          <Icon.ArrowRight fill={colors.gray500} />
        </Flex>
      </Button>
      <Container as="View">
        <Flex gap={10}>
          <Flex direction="row" justify="between" align="center">
            <Text size="xl" weight={600}>
              한양패스 이벤트
            </Text>
            <Button onPress={onSelect}>
              <Icon.Favorite selected={selected} />
            </Button>
          </Flex>
          <Text weight={600} style={styles.endDate}>
            신청마감일 : 2023.12.29
          </Text>
          <Text>
            오직 한양인을 위한 상권 제휴, HANYANG PASS 한양대학교 서울캠퍼스 재학생 및 휴학생에게
            제공되는 협찬권입니다.
          </Text>
        </Flex>
        <View style={styles.divider} />
        <Flex gap={50}>
          <Flex gap={24}>
            <Content title="기간" content="2023.10.17~2023.12.31" />
            <Content title="혜택 대상" content="한양대학교 서울캠퍼스 소속 재학생 및 휴학생" />
            <Content title="신청조건" content="음식점" />
            <Content title="우선 협찬 대상" content="한양대학교 근처 음식점" />
            <Content
              title="이벤트 장소"
              content={"한양대학교 서울캠퍼스경영관\n한양대학교 서울캠퍼스"}
            />
            <Content
              title="유의사항"
              content="학생들이 모바일 학생증 및 실물 학생증 제시할 시 협찬 제공해주셔야 합니다."
            />
          </Flex>
          <Flex direction="row" gap={12}>
            <TextButton style={{ flex: 1 }} type="outline">
              1:1 채팅
            </TextButton>
            <TextButton style={{ flex: 1 }}>협찬 제안</TextButton>
          </Flex>
        </Flex>
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  collegeWrap: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: colors.gray100,
  },
  college: {
    color: colors.gray500,
  },
  endDate: {
    color: colors.gray500,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: colors.gray300,
    marginTop: 24,
    marginBottom: 16,
  },
});
