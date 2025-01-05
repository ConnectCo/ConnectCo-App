import { StyleSheet, TextInputProps, View } from "react-native";

import { colors } from "@/src/constants/color";

import Button from "../button";
import Flex from "../flex";
import Text from "../text";

import Input from ".";

interface InputWithTitleProps extends TextInputProps {
  title: string;
  optional?: boolean;
  left?: React.ReactNode;
  right?: React.ReactNode;
  description?: string;
  type?: "text" | "button";
  onPress?: () => void;
}

export default function InputWithTitle({
  title,
  optional,
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
        <Flex direction="row" align="center">
          <Text size="lg" weight={600}>
            {title}{" "}
          </Text>
          {optional && (
            <Text weight={500} style={styles.optional}>
              (선택)
            </Text>
          )}
        </Flex>
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
  optional: {
    color: colors.gray300,
  },
});
