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
import { useChat } from "@/src/hooks/use-chat";
import { ChatMessageDTO } from "@/src/models/chat";
import { groupingMessages } from "@/src/utils/message";

export default function ChatScreen() {
  const [messageList, setMessageList] = useState<ChatMessageDTO[]>([]);

  const { message, onChangeText, sendMessage, hasConnection } = useChat(1, 2, setMessageList);

  const params = useLocalSearchParams();
  const { bottom } = useSafeAreaInsets();

  const { name, id } = params;

  const groupedMessages = groupingMessages(messageList);

  const onSubmitEditing = () => {
    sendMessage();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
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
        {!hasConnection ? (
          <Text align="center" style={styles.emptyText}>
            네트워크 연결 상태를 확인해주세요.
          </Text>
        ) : groupedMessages.length > 0 ? (
          groupedMessages.map((group) =>
            group.senderId === -1 ? (
              <Text size="sm" align="center" key={group.items[0].time} style={styles.chatDate}>
                {group.items[0].time}
              </Text>
            ) : group.senderId === +id ? (
              <OppositeChat nickname="호말 커피" key={group.groupId} items={group.items} />
            ) : (
              <MyChat key={group.groupId} items={group.items} />
            )
          )
        ) : (
          <Text align="center" style={styles.emptyText}>
            아직 나눈 대화가 없어요.
          </Text>
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
  emptyText: {
    color: colors.gray500,
    marginTop: 20,
  },
});
