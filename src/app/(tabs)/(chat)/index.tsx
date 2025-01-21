import { ScrollView, StyleSheet, View } from "react-native";

import ChatItem from "@/src/components/chat/chat-item";
import { colors } from "@/src/constants/color";
import { formatDateTime } from "@/src/utils/date";

const chats = [
  {
    id: 1,
    profile: require("@/src/assets/static/homeal.png"),
    name: "호말커피",
    time: "2025-01-10T14:20:58",
    message: "ChatScreen",
    unread: 1,
  },
  {
    id: 2,
    profile: require("@/src/assets/static/homeal.png"),
    name: "커피빈",
    time: "2025-01-10T14:20:58",
    message: "Hello there!",
    unread: 2,
  },
  {
    id: 3,
    profile: require("@/src/assets/static/homeal.png"),
    name: "스타벅스",
    time: "2025-01-10T14:20:58",
    message: "How are you?",
    unread: 0,
  },
  {
    id: 4,
    profile: require("@/src/assets/static/homeal.png"),
    name: "이디야",
    time: "2025-01-10T14:20:58",
    message: "Let's meet up.",
    unread: 3,
  },
];

export default function ChatListScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.banner} />
      {chats.map((chat) => (
        <ChatItem key={chat.id} {...chat} time={formatDateTime(chat.time)} />
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
