import { StyleSheet, Text as DefaultText, TextProps as DefaultTextProps } from "react-native";

import { colors } from "@/constants/color";

interface TextProps extends DefaultTextProps {
  size?: "sm" | "md" | "lg" | "xl";
  weight?: "normal" | "regular" | "semibold" | "bold";
  align?: "auto" | "justify" | "left" | "center" | "right";
}

export default function Text({
  children,
  size = "md",
  weight = "normal",
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
    lineHeight: 26,
  },
});
