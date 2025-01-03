import { StyleSheet, TouchableOpacityProps } from "react-native";

import { colors } from "@/constants/color";

import Text from "../text";

import Button from ".";

interface SelectButtonProps extends TouchableOpacityProps {
  type?: "fill" | "outline";
}

export default function SelectButton({ onPress, children, type = "fill" }: SelectButtonProps) {
  const { backgroundColor, color } = styles[type];

  return (
    <Button style={[styles.button, { backgroundColor }]} onPress={onPress}>
      <Text size="lg" align="center" weight={600} style={{ color }}>
        {children}
      </Text>
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    borderRadius: 12,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: colors.gray300,
  },
  fill: {
    backgroundColor: colors.primary200,
    color: colors.white,
  },
  outline: {
    backgroundColor: colors.gray100,
    color: colors.black,
  },
});
