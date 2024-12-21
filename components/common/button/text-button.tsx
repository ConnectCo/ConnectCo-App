import { StyleSheet, TouchableOpacityProps } from "react-native";
import Button from ".";
import Text from "../text";
import { colors } from "@/constants/color";

interface TextButtonProps extends TouchableOpacityProps {
  children: string;
  type?: "fill" | "outline";
}

export default function TextButton({ children, type = "fill", ...restProps }: TextButtonProps) {
  const { backgroundColor, color } = styles[type];
  const { style, ...props } = restProps;

  return (
    <Button style={[styles.container, { backgroundColor }, style]} {...props}>
      <Text style={[styles.text, { color }]}>{children}</Text>
    </Button>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    borderColor: colors.primary200,
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 600,
    textAlign: "center",
  },
  fill: {
    backgroundColor: colors.primary200,
    color: colors.white,
  },
  outline: {
    backgroundColor: colors.gray100,
    color: colors.primary200,
  },
});
