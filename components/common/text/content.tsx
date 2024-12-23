import Flex from "../flex";

import Text from ".";

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
      <Text>{content}</Text>
    </Flex>
  );
}
