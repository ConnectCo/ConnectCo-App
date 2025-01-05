import { StyleSheet, TextInput, TextInputProps } from "react-native";

import { colors } from "@/src/constants/color";

import Flex from "../flex";

interface InputProps extends TextInputProps {
  type?: "fill" | "outline";
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export default function Input({
  value,
  onChangeText,
  placeholder,
  type = "outline",
  left,
  right,
  ...restProps
}: InputProps) {
  const inputStyle = styles[type];
  const isOutline = type === "outline";
  const { multiline, ...props } = restProps;
  const height = multiline ? { minHeight: 59.7 } : { maxHeight: 40 };
  const align = multiline ? "start" : "center";

  return (
    <Flex direction="row" align={align} gap={5} style={[styles.container, inputStyle, height]}>
      {left}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={isOutline ? colors.gray300 : colors.gray500}
        style={styles.input}
        multiline={multiline}
        {...props}
      />
      {right}
    </Flex>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "transparent",
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  input: {
    flex: 1,
    fontWeight: 500,
    padding: 0,
    color: colors.black,
  },
  fill: {
    backgroundColor: colors.gray200,
  },
  outline: {
    backgroundColor: colors.white,
    borderColor: colors.gray300,
  },
});
