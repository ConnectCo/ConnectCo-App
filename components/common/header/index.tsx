import { SafeAreaView, StyleSheet } from "react-native";

import { colors } from "@/constants/color";

import Flex from "../flex";

interface HeaderProps {
  type?: "primary" | "gray";
  children: React.ReactNode;
}

export default function Header({ type = "primary", children }: HeaderProps) {
  const backgroundColor = type === "primary" ? colors.primary200 : colors.gray100;
  return (
    <SafeAreaView style={{ backgroundColor }}>
      <Flex direction="row" justify="between" align="center" style={styles.innerContainer}>
        {children}
      </Flex>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
});
