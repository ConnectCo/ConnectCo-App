import { StyleSheet } from "react-native";

import Flex from "../common/flex";
import Text from "../common/text";

interface ContentProps {
  title: string;
  content: string;
}

export default function Content({ title, content }: ContentProps) {
  return (
    <Flex gap={4}>
      <Text size="lg" weight={600}>
        {title}
      </Text>
      <Text style={styles.content}>{content}</Text>
    </Flex>
  );
}

const styles = StyleSheet.create({
  content: {},
});
