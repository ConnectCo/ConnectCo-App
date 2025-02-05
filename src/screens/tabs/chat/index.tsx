import { ScrollView, StyleSheet, View } from "react-native";

import ChatItem from "@/src/components/chat/chat-item";
import { colors } from "@/src/constants/color";
import { useGetChatList } from "@/src/lib/tanstack/quries/chat";
import { ChatListDTO } from "@/src/models/chat";

const chats = [
  {
    chatRoomId: 1,
    otherMemberId: 1,
    otherMemberName: "호말커피",
    recentMessage: "ChatScreen",
    recentMessageTime: "2025-01-10T14:20:58",
    profileImage: require("@/src/assets/static/homeal.png"),
    unreadCount: 1,
  },
  {
    chatRoomId: 2,
    otherMemberId: 2,
    otherMemberName: "커피빈",
    recentMessage: "Hello there!",
    recentMessageTime: "2025-01-10T14:20:58",
    profileImage: require("@/src/assets/static/homeal.png"),
    unreadCount: 2,
  },
  {
    chatRoomId: 3,
    otherMemberId: 3,
    otherMemberName: "스타벅스",
    recentMessage: "How are you?",
    recentMessageTime: "2025-01-10T14:20:58",
    profileImage: require("@/src/assets/static/homeal.png"),
    unreadCount: 0,
  },
  {
    chatRoomId: 4,
    otherMemberId: 4,
    otherMemberName: "이디야",
    recentMessage: "Let's meet up.",
    recentMessageTime: "2025-01-10T14:20:58",
    profileImage: require("@/src/assets/static/homeal.png"),
    unreadCount: 3,
  },
];

export default function ChatScreen() {
  const { data } = useGetChatList<ChatListDTO[]>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.banner} />
      {chats.map((chat) => (
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
