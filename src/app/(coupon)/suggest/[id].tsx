import { router, useLocalSearchParams } from "expo-router";

import { StyleSheet } from "react-native";

import TextButton from "@/src/components/common/button/text-button";
import Container from "@/src/components/common/container";
import Flex from "@/src/components/common/flex";
import Icon from "@/src/components/common/icon";
import InputWithTitle from "@/src/components/common/input/input-with-title";
import { colors } from "@/src/constants/color";
import { useCouponSuggestionStore } from "@/src/lib/zustand/suggestion";

export default function SuggestScreen() {
  // 협찬 제안 API 호출 시 사용
  const { id } = useLocalSearchParams();
  const { suggestion, setSuggestions } = useCouponSuggestionStore();

  // TODO: 협찬 제안 API 호출
  const onSuggestion = () => {
    setSuggestions({
      name: "",
      description: "",
      priorityTarget: "",
    });
    router.back();
  };

  const onRouteSuggestionList = () => {
    router.push("/(coupon)/suggest/list");
  };

  return (
    <Container as="ScrollView" contentContainerStyle={styles.container}>
      <Flex gap={20}>
        <InputWithTitle
          right={<Icon.Search fill={colors.gray300} />}
          title="쿠폰 불러오기"
          placeholder="어떤 쿠폰을 불러올까요?"
          description="쿠폰 정보 등록, 수정은 마이페이지에서 가능합니다."
          type="button"
          onPress={onRouteSuggestionList}
        />
        <InputWithTitle
          title="쿠폰 이름"
          placeholder="예시) 커넥코대학교 방송국 퀴즈 경품, 커넥코 패스"
          value={suggestion.name}
          readOnly
        />
        <InputWithTitle
          title="쿠폰 상세 정보"
          placeholder="설명이 자세할수록 더 많은 협찬 신청이 들어와요!"
          value={suggestion.description}
          readOnly
        />
        <InputWithTitle
          multiline
          title="우선 협찬 대상"
          placeholder={
            "이벤트 운영자에게 하고 싶은 말을 자유롭게 입력해주세요.\n정성들여 작성할수록 협찬 제안을 수락할 확률이 높아져요!"
          }
          value={suggestion.priorityTarget}
          readOnly
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
