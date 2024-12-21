import { StyleSheet, Text as DefaultText, TextProps as DefaultTextProps } from "react-native";

import { colors } from "@/constants/color";

interface TextProps extends DefaultTextProps {
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Text({ children, size = "md", ...restProps }: TextProps) {
  const { style, ...props } = restProps;

  return (
    <DefaultText style={[styles.text, styles[size], style]} {...props}>
      {children}
    </DefaultText>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.black,
  },
  sm: {
    fontSize: 12,
    lineHeight: 16,
  },
  md: {
    fontSize: 14,
    lineHeight: 18,
  },
  lg: {
    fontSize: 16,
    lineHeight: 20,
  },
  xl: {
    fontSize: 20,
    lineHeight: 26,
  },
});
