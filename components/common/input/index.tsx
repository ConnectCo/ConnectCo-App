import { StyleSheet, TextInput, TextInputProps } from "react-native";
import Flex from "../flex";
import { colors } from "@/constants/color";

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

  return (
    <Flex direction="row" align="center" style={[styles.container, inputStyle]}>
      {left}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={isOutline ? colors.gray300 : colors.gray500}
        style={styles.input}
        {...restProps}
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
    maxHeight: 40,
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 18,
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
