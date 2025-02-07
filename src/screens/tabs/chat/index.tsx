import { ScrollView, StyleSheet, View } from "react-native";

import ChatItem from "@/src/components/chat/chat-item";
import { colors } from "@/src/constants/color";
import { useGetChatList } from "@/src/lib/tanstack/quries/chat";
import { ChatListDTO } from "@/src/models/chat";

export default function ChatListScreen() {
  const { data } = useGetChatList<ChatListDTO[]>();

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
});
