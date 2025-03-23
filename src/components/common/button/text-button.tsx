import { StyleSheet, TouchableOpacityProps } from "react-native";

import { colors } from "@/src/constants/color";

import Text from "../text";

import Button from ".";

interface TextButtonProps extends TouchableOpacityProps {
  children: string;
  type?: "fill" | "outline" | "disabled";
}

export default function TextButton({ children, type = "fill", ...restProps }: TextButtonProps) {
  const { backgroundColor, color, borderColor } = styles[type];
  const { style, ...props } = restProps;

  return (
    <Button style={[styles.container, { backgroundColor, borderColor }, style]} {...props}>
      <Text size="lg" weight={600} align="center" style={{ color }}>
        {children}
      </Text>
    </Button>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    borderWidth: 1,
    borderRadius: 10,
  },
  fill: {
    borderColor: colors.primary300,
    backgroundColor: colors.primary300,
    color: colors.white,
  },
  outline: {
    borderColor: colors.primary300,
    backgroundColor: colors.gray100,
    color: colors.primary300,
  },
  disabled: {
    borderColor: colors.gray100,
    backgroundColor: colors.gray100,
    color: colors.gray300,
  },
});
