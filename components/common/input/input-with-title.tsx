import { StyleSheet, TextInputProps, View } from "react-native";

import { colors } from "@/constants/color";

import Button from "../button";
import Flex from "../flex";
import Text from "../text";

import Input from ".";

interface InputWithTitleProps extends TextInputProps {
  title: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  description?: string;
  type?: "text" | "button";
  onPress?: () => void;
}

export default function InputWithTitle({
  title,
  left,
  right,
  description,
  type = "text",
  onPress,
  ...restProps
}: InputWithTitleProps) {
  const Component = type === "text" ? View : Button;
  const isReadOnly = type === "button";

  return (
    <Flex gap={8}>
      <Flex gap={4}>
        <Text size="lg" weight={600}>
          {title}
        </Text>
        <Component onPress={() => onPress?.()}>
          <Input
            left={left}
            right={right}
            readOnly={isReadOnly}
            pointerEvents={isReadOnly ? "none" : "auto"}
            {...restProps}
          />
        </Component>
      </Flex>
      {description && (
        <Text size="sm" weight={500} style={styles.description}>
          {description}
        </Text>
      )}
    </Flex>
  );
}

const styles = StyleSheet.create({
  description: {
    color: colors.gray500,
  },
});
