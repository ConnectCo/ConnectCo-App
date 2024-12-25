import { StyleSheet } from "react-native";

import Container from "@/components/common/container";
import Flex from "@/components/common/flex";
import Text from "@/components/common/text";
import { colors } from "@/constants/color";

const HISTORIES = ["최근", "검색어", "목록"];

export default function Search() {
  return (
    <Container as="ScrollView">
      <Flex gap={14}>
        <Text size="lg" weight={600}>
          최근검색어
        </Text>
        <Flex gap={10}>
          {HISTORIES.map((history) => (
            <Text key={history} size="lg" weight={600} style={styles.history}>
              {history}
            </Text>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
}

const styles = StyleSheet.create({
  history: {
    color: colors.gray500,
  },
});
