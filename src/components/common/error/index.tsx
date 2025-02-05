import { ErrorBoundaryProps } from "expo-router";

import Button from "../button";
import Flex from "../flex";
import Text from "../text";

export default function Error({ error, retry }: ErrorBoundaryProps) {
  return (
    <Flex align="center" justify="center" gap={20} style={{ flex: 1 }}>
      <Text size="xl">{error.message}</Text>
      <Button onPress={retry}>
        <Text size="lg">다시 시도하기</Text>
      </Button>
    </Flex>
  );
}
