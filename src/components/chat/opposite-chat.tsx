import { Dimensions, StyleSheet, View } from "react-native";

import { colors } from "@/src/constants/color";
import { ChatMessageProps } from "@/src/types/chat";

import Text from "../common/text";

const { width } = Dimensions.get("window");

interface OppositeChatProps {
  nickname: string;
  items: ChatMessageProps[];
}

export default function OppositeChat({ nickname, items }: OppositeChatProps) {
  return (
    <View style={styles.container}>
      <View style={styles.profile} />
      <View>
        <Text weight={600}>{nickname}</Text>
        <View style={styles.messageContainer}>
          {items.map(({ chatId, message, time }) => (
            <View key={chatId} style={styles.messageWrap}>
              <Text style={styles.message}>{message}</Text>
              <Text style={styles.messageTime} size="sm">
                {time}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 5,
    marginTop: 15,
  },
  messageWrap: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 5,
  },
  messageContainer: {
    gap: 10,
    marginTop: 6,
  },
  message: {
    backgroundColor: colors.gray500,
    maxWidth: width - 120,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: colors.white,
  },
  messageTime: {
    color: colors.gray500,
  },
  profile: {
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: colors.gray200,
  },
});
