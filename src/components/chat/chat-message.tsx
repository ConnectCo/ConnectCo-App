import { useLocalSearchParams } from "expo-router";

import { useState } from "react";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import MyChat from "@/src/components/chat/my-chat";
import OppositeChat from "@/src/components/chat/opposite-chat";
import Text from "@/src/components/common/text";
import { colors } from "@/src/constants/color";
import { useChat } from "@/src/hooks/use-chat";
import { useGetChat } from "@/src/lib/tanstack/quries/chat";
import { ChatMessageDTO } from "@/src/models/chat";
import { groupingMessages } from "@/src/utils/message";

export default function ChatMessage() {
  const params = useLocalSearchParams();
  const { chatRoomId } = params;

  const { data } = useGetChat<ChatMessageDTO[]>(+chatRoomId);
  const [messageList, setMessageList] = useState<ChatMessageDTO[]>(data.result);

  const { bottom } = useSafeAreaInsets();

  const { message, onChangeText, sendMessage, hasConnection } = useChat(
    +chatRoomId,
    setMessageList
  );

  const groupedMessages = groupingMessages(messageList);

  const onSubmitEditing = () => {
    sendMessage();
  };

  return (
    <>
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
            ) : group.senderId === +chatRoomId ? (
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
    </>
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
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
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
