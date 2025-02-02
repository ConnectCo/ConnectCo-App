import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";

import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import MyChat from "@/src/components/chat/my-chat";
import OppositeChat from "@/src/components/chat/opposite-chat";
import BackHeader from "@/src/components/common/header/back-header";
import Text from "@/src/components/common/text";
import { colors } from "@/src/constants/color";
import { groupingMessages } from "@/src/utils/message";

const dummyMessages = [
  {
    senderId: 2,
    chatId: 12,
    message: "안녕하세요. OO대학교 행사 기획 동아리입니다. 이번 축제에 협찬을 요청드리고 싶습니다.",
    createdAt: "2023-10-15T09:00:00Z",
  },
  {
    senderId: 1,
    chatId: 13,
    message: "안녕하세요. 어떤 방식의 협찬을 원하시는지 구체적으로 말씀해주실 수 있을까요?",
    createdAt: "2023-10-15T09:05:00Z",
  },
  {
    senderId: 2,
    chatId: 14,
    message: "무대 행사 전후로 음료나 간단한 쿠키를 지원받을 수 있을지 궁금합니다.",
    createdAt: "2023-10-15T09:10:00Z",
  },
  {
    senderId: 1,
    chatId: 15,
    message: "가능할 것 같네요. 예상 인원과 원하는 종류가 있으신가요?",
    createdAt: "2023-10-15T09:11:00Z",
  },
  {
    senderId: 1,
    chatId: 16,
    message: "카페 홍보도 함께 진행해 주시면 저희도 준비하기 수월할 듯합니다.",
    createdAt: "2023-10-15T09:12:00Z",
  },
  {
    senderId: 2,
    chatId: 17,
    message: "네, 행사 포스터와 SNS에 카페 로고를 포함할 계획입니다.",
    createdAt: "2023-10-15T09:13:00Z",
  },
  {
    senderId: 1,
    chatId: 18,
    message: "좋습니다. 날짜와 수량은 어떻게 될까요?",
    createdAt: "2023-10-15T09:14:00Z",
  },
  {
    senderId: 2,
    chatId: 19,
    message: "행사는 다음 주말이고 대략 100명 분량을 예상합니다.",
    createdAt: "2023-10-15T09:16:00Z",
  },
  {
    senderId: 1,
    chatId: 20,
    message: "알겠습니다. 준비 사항 미리 알려주시면 좋을 것 같네요.",
    createdAt: "2023-10-15T09:17:00Z",
  },
  {
    senderId: 2,
    chatId: 21,
    message: "지원 요청서와 상세 안내 자료도 곧 전달드리겠습니다.",
    createdAt: "2023-10-16T09:20:00Z",
  },
  {
    senderId: 1,
    chatId: 22,
    message: "네, 확인 후 빠른 시일 내에 회신 드리겠습니다.",
    createdAt: "2023-10-16T09:22:00Z",
  },
  {
    senderId: 2,
    chatId: 23,
    message: "감사합니다. 협조 부탁드립니다.",
    createdAt: "2023-10-16T09:24:00Z",
  },
  {
    senderId: 1,
    chatId: 24,
    message: "네, 저희도 행사 성공을 기원하겠습니다. 문의 사항 있으시면 언제든 연락 주세요.",
    createdAt: "2023-10-16T09:26:00Z",
  },
  {
    senderId: 2,
    chatId: 25,
    message: "네, 도움 주셔서 감사합니다. 곧 자료 보내드리겠습니다.",
    createdAt: "2023-10-16T09:28:00Z",
  },
];

export default function ChatScreen() {
  const [message, setMessage] = useState("");

  const params = useLocalSearchParams();
  const { bottom } = useSafeAreaInsets();

  const { name, id } = params;

  const groupedMessages = groupingMessages(dummyMessages);

  const onChangeText = (e: string) => {
    setMessage(e);
  };

  const onSubmitEditing = () => {
    setMessage("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0} // 필요에 따라 조정
    >
      <BackHeader title={name as string} call="010-3708-0438" />
      <View style={styles.card}>
        <Image source={require("@/src/assets/static/homeal.png")} style={styles.image} />
        <View style={styles.text}>
          <Text size="sm" weight={500} style={styles.status}>
            협찬 진행 중
          </Text>
          <Text size="lg" weight={600} numberOfLines={1}>
            쿠키 무료 제공 쿠폰 (50매)
          </Text>
          <Text size="sm">~2023.10.29 까지 사용</Text>
        </View>
      </View>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainerStyle}>
        {groupedMessages.map((group) =>
          group.senderId === -1 ? (
            <Text size="sm" align="center" key={group.items[0].time} style={styles.chatDate}>
              {group.items[0].time}
            </Text>
          ) : group.senderId === +id ? (
            <OppositeChat nickname="호말 커피" key={group.groupId} items={group.items} />
          ) : (
            <MyChat key={group.groupId} items={group.items} />
          )
        )}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.textInput, { marginBottom: bottom }]}
          placeholder="메시지를 입력하세요"
          placeholderTextColor={colors.gray500}
          value={message}
          onChangeText={onChangeText}
          returnKeyType="send"
          onSubmitEditing={onSubmitEditing}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainerStyle: {
    paddingBottom: 20,
    paddingHorizontal: 8,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 12,
    gap: 16,
    borderBottomWidth: 1,
    borderColor: colors.gray300,
    backgroundColor: colors.white,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  text: {
    justifyContent: "space-between",
    flex: 1,
    alignSelf: "stretch",
  },
  status: {
    color: colors.primary300,
  },
  chatDate: {
    color: colors.gray500,
    marginTop: 20,
  },
  inputContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: colors.gray300,
    backgroundColor: colors.white,
  },
  textInput: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray300,
  },
});
