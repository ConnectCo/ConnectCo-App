import { useLocalSearchParams, useRouter } from "expo-router";

import { useState } from "react";
import { StyleSheet } from "react-native";

import TextButton from "@/components/common/button/text-button";
import Container from "@/components/common/container";
import Flex from "@/components/common/flex";
import Icon from "@/components/common/icon";
import InputWithTitle from "@/components/common/input/input-with-title";
import { colors } from "@/constants/color";

const INITIAL_SUGGESTION = {
  coupon: "",
  store: "",
  couponName: "",
  couponDetail: "",
  target: "",
};

export default function SuggestScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const [suggestion, setSuggestion] = useState(INITIAL_SUGGESTION);

  const onChangeText = (key: string, value: string) => {
    setSuggestion((prev) => ({ ...prev, [key]: value }));
  };

  const onSuggestion = () => {
    // TODO: 협찬 제안 API 호출
    router.back();
  };

  return (
    <Container as="ScrollView" contentContainerStyle={styles.container}>
      <Flex gap={20}>
        <InputWithTitle
          left={<Icon.Search fill={colors.gray300} />}
          right={<Icon.Dropdown />}
          title="쿠폰 불러오기"
          placeholder="어떤 쿠폰을 불러올까요?"
          description="쿠폰 정보 등록, 수정은 마이페이지에서 가능합니다."
          type="button"
          onPress={() => {}}
        />
        <InputWithTitle
          left={<Icon.Search fill={colors.gray300} />}
          right={<Icon.Dropdown />}
          title="가게"
          placeholder="가게 프로필을 선택해주세요."
          description="가게 정보 등록, 수정은 마이페이지에서 가능합니다."
          type="button"
          onPress={() => {}}
        />
        <InputWithTitle
          title="쿠폰 이름"
          placeholder="예시) 커넥코대학교 방송국 퀴즈 경품, 커넥코 패스"
          value={suggestion.couponName}
          onChangeText={(value) => onChangeText("couponName", value)}
        />
        <InputWithTitle
          title="쿠폰 상세 정보"
          placeholder="설명이 자세할수록 더 많은 협찬 신청이 들어와요!"
          value={suggestion.couponDetail}
          onChangeText={(value) => onChangeText("couponDetail", value)}
        />
        <InputWithTitle
          multiline
          title="우선 협찬 대상"
          placeholder={
            "이벤트 운영자에게 하고 싶은 말을 자유롭게 입력해주세요.\n정성들여 작성할수록 협찬 제안을 수락할 확률이 높아져요!"
          }
          value={suggestion.target}
          onChangeText={(value) => onChangeText("target", value)}
        />
      </Flex>
      <TextButton onPress={onSuggestion}>협찬제안</TextButton>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    height: "100%",
  },
});
