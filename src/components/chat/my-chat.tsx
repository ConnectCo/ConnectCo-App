import { Dimensions, StyleSheet, View } from "react-native";

import { colors } from "@/src/constants/color";
import { ChatMessageProps } from "@/src/types/chat";

import Text from "../common/text";

const width = Dimensions.get("window").width;

interface MyChatProps {
  items: ChatMessageProps[];
}

export default function MyChat({ items }: MyChatProps) {
  return (
    <View style={styles.container}>
      {items.map(({ chatId, message, time }) => (
        <View key={chatId} style={styles.wrap}>
          <Text style={styles.messageTime} size="sm">
            {time}
          </Text>
          <Text style={styles.message}>{message}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    gap: 10,
    alignItems: "flex-end",
  },
  wrap: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 5,
  },
  messageTime: {
    color: colors.gray500,
  },
  message: {
    backgroundColor: colors.primary300,
    maxWidth: width - 80,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: colors.white,
  },
});
