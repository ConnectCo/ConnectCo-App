import { StyleSheet, Text as DefaultText, TextProps as DefaultTextProps } from "react-native";

import { colors } from "@/src/constants/color";

interface TextProps extends DefaultTextProps {
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
  weight?: 400 | 500 | 600 | 700;
  align?: "auto" | "justify" | "left" | "center" | "right";
}

export default function Text({
  children,
  size = "md",
  weight = 400,
  align = "auto",
  ...restProps
}: TextProps) {
  const { style, ...props } = restProps;

  return (
    <DefaultText
      style={[styles.text, styles[size], { fontWeight: weight, textAlign: align }, style]}
      {...props}
    >
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
    lineHeight: 22,
  },
  xxl: {
    fontSize: 20,
    lineHeight: 26,
  },
});
