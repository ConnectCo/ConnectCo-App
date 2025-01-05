import { Dimensions, StyleSheet } from "react-native";

import { colors } from "@/constants/color";

import Flex from "../common/flex";
import Icon from "../common/icon";
import Text from "../common/text";

interface AlarmItemProps {
  id: number;
  isRead: boolean;
  content: string;
}

const { width } = Dimensions.get("screen");

export default function AlarmItem({ id, isRead, content }: AlarmItemProps) {
  return (
    <Flex
      direction="row"
      gap={4}
      align="center"
      style={[styles.container, isRead && styles.unread]}
    >
      <Icon.Alarm fill={colors.black} dot />
      <Text numberOfLines={1} style={styles.text}>
        {content}
      </Text>
    </Flex>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.gray300,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  unread: {
    backgroundColor: colors.primary200,
  },
  text: {
    width: width - 106,
  },
});
