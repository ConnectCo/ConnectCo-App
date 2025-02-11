import { router, useLocalSearchParams } from "expo-router";

import { StyleSheet } from "react-native";

import TextButton from "@/src/components/common/button/text-button";
import ButtonCalendar from "@/src/components/common/calendar/button-calendar";
import Container from "@/src/components/common/container";
import Flex from "@/src/components/common/flex";
import Icon from "@/src/components/common/icon";
import InputWithTitle from "@/src/components/common/input/input-with-title";
import { colors } from "@/src/constants/color";
import { useEventSuggestionStore } from "@/src/lib/zustand/suggestion";

export default function SuggestScreen() {
  const { id } = useLocalSearchParams();
  const { suggestion, setSuggestions } = useEventSuggestionStore();

  const onSuggestion = () => {
    // TODO: 협찬 제안 API 호출
    setSuggestions({
      name: "",
      duration: "",
      description: "",
      priorityTarget: "",
    });
    router.back();
  };

  const onRouteSuggestionList = () => {
    router.push("/(event)/suggest/list");
  };

  return (
    <Container as="ScrollView" contentContainerStyle={styles.container}>
      <Flex gap={20}>
        <InputWithTitle
          right={<Icon.Search fill={colors.gray300} />}
          title="이벤트 불러오기"
          placeholder="어떤 이벤트를 불러올까요?"
          description="이벤트 정보 등록, 수정은 마이페이지에서 가능합니다."
          type="button"
          onPress={onRouteSuggestionList}
        />
        <InputWithTitle
          title="이벤트 이름"
          placeholder="예시) 커넥코대학교 방송국 퀴즈 경품, 커넥코 패스"
          value={suggestion.name}
          readOnly
        />
        <ButtonCalendar
          title="협찬 기간"
          date={suggestion.duration || "이벤트를 선택해주세요."}
          onConfirm={() => {}}
          disabled
        />
        <InputWithTitle
          title="혜택 대상"
          placeholder="이벤트 혜택을 받는 대상이 누구인지 입력해주세요."
          value={suggestion.description}
          readOnly
        />
        <InputWithTitle
          multiline
          title="우선 협찬 대상"
          placeholder={
            "우선적으로 협찬을 받고 싶은 대상을 입력해주세요.\n대상에 해당하는 가게에서 연락이 올거에요 :)"
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
