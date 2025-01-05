import { useLocalSearchParams, useRouter } from "expo-router";

import { useState } from "react";
import { StyleSheet } from "react-native";

import TextButton from "@/src/components/common/button/text-button";
import Calendar from "@/src/components/common/calendar";
import Container from "@/src/components/common/container";
import Flex from "@/src/components/common/flex";
import Icon from "@/src/components/common/icon";
import InputWithTitle from "@/src/components/common/input/input-with-title";
import { colors } from "@/src/constants/color";
import { formatDate } from "@/src/utils/date";

const INITIAL_SUGGESTION = {
  event: "",
  eventName: "",
  organize: "",
  endDate: "",
  target: "",
  priorityTarget: "",
};

export default function SuggestScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [showCalendar, setShowCalendar] = useState(false);

  const [suggestion, setSuggestion] = useState(INITIAL_SUGGESTION);

  const onChangeText = (key: string, value: string) => {
    setSuggestion((prev) => ({ ...prev, [key]: value }));
  };

  const onSuggestion = () => {
    // TODO: 협찬 제안 API 호출
    router.back();
  };

  const onOpenCalendar = () => {
    setShowCalendar(true);
  };

  const onCloseCalendar = () => {
    setShowCalendar(false);
  };

  const onSelectDate = (date: Date) => {
    onChangeText("endDate", formatDate(date));
    onCloseCalendar();
  };

  return (
    <Container as="ScrollView" contentContainerStyle={styles.container}>
      <Flex gap={20}>
        <InputWithTitle
          left={<Icon.Search fill={colors.gray300} />}
          right={<Icon.Dropdown />}
          title="이벤트 불러오기"
          placeholder="어떤 이벤트를 불러올까요?"
          description="이벤트 정보 등록, 수정은 마이페이지에서 가능합니다."
          type="button"
          onPress={() => {}}
        />
        <InputWithTitle
          title="이벤트 이름"
          placeholder="예시) 커넥코대학교 방송국 퀴즈 경품, 커넥코 패스"
          value={suggestion.eventName}
          onChangeText={(value) => onChangeText("eventName", value)}
        />
        <InputWithTitle
          type="button"
          title="단체"
          placeholder="단체명을 검색하세요. 예시) 커넥코 대학교"
          left={<Icon.Search fill={colors.gray300} />}
          value={suggestion.organize}
        />
        <InputWithTitle
          type="button"
          title="협찬 기간"
          placeholder="언제부터 언제까지 협찬을 원하시나요?"
          right={<Icon.Calendar />}
          onPress={onOpenCalendar}
          value={suggestion.endDate}
        />
        <InputWithTitle
          title="혜택 대상"
          placeholder="이벤트 혜택을 받는 대상이 누구인지 입력해주세요."
          value={suggestion.target}
          onChangeText={(value) => onChangeText("target", value)}
        />
        <InputWithTitle
          multiline
          title="우선 협찬 대상"
          placeholder={
            "우선적으로 협찬을 받고 싶은 대상을 입력해주세요.\n대상에 해당하는 가게에서 연락이 올거에요 :)"
          }
          value={suggestion.priorityTarget}
          onChangeText={(value) => onChangeText("priorityTarget", value)}
        />
      </Flex>
      <TextButton onPress={onSuggestion}>협찬제안</TextButton>
      <Calendar isVisible={showCalendar} onConfirm={onSelectDate} onCancel={onCloseCalendar} />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    height: "100%",
  },
});
