import { StyleSheet } from "react-native";

import { colors } from "@/constants/color";

import Button from ".";

interface ChipButtonProps {
  children: React.ReactNode;
  onPress: () => void;
}

export default function ChipButton({ children, onPress }: ChipButtonProps) {
  return (
    <Button onPress={onPress} style={styles.button}>
      {children}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: colors.gray200,
    borderRadius: 20,
  },
});
