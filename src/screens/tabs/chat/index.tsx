import { ScrollView, StyleSheet, View } from "react-native";

import ChatItem from "@/src/components/chat/chat-item";
import Text from "@/src/components/common/text";
import { colors } from "@/src/constants/color";
import { useGetChatList } from "@/src/lib/tanstack/quries/chat";
import { ChatListDTO } from "@/src/models/chat";

export default function ChatListScreen() {
  const { data } = useGetChatList<ChatListDTO[]>();

  if (data.result.length === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.banner} />
        <View style={styles.empty}>
          <Text size="lg" style={styles.emptyText}>
            채팅 내역이 없습니다.
          </Text>
        </View>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.banner} />
      {data.result.map((chat) => (
        <ChatItem key={chat.otherMemberId} {...chat} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  banner: {
    width: "100%",
    height: 80,
    backgroundColor: colors.gray500,
  },
  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    color: colors.gray300,
  },
});
