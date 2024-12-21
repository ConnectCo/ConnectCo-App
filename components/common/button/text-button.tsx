import { StyleSheet } from "react-native";
import Button from ".";
import Text from "../text";
import { colors } from "@/constants/color";

interface TextButtonProps {
  children: string;
  type?: "fill" | "outline";
}

export default function TextButton({ children, type = "fill", ...restProps }: TextButtonProps) {
  const textStyle = styles[type];
  return (
    <Button style={[styles.container, textStyle]} {...restProps}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </Button>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    borderColor: colors.primary200,
    boxSizing: "border",
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
