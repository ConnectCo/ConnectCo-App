import { Text as DefaultText, TextProps as DefaultTextProps, StyleSheet } from "react-native";

interface TextProps extends DefaultTextProps {
  children: string;
  size?: "sm" | "md" | "lg";
}

export default function Text({ children, size = "md", ...restProps }: TextProps) {
  return (
    <DefaultText style={styles[size]} {...restProps}>
      {children}
    </DefaultText>
  );
}

const styles = StyleSheet.create({
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
