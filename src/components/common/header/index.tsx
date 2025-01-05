import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors } from "@/src/constants/color";

import Flex from "../flex";

interface HeaderProps {
  type?: "primary" | "gray";
  children: React.ReactNode;
}

export default function Header({ type = "primary", children }: HeaderProps) {
  const backgroundColor = type === "primary" ? colors.primary300 : colors.gray100;
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ backgroundColor, paddingTop: top }}>
      <Flex direction="row" justify="between" align="center" style={styles.innerContainer}>
        {children}
      </Flex>
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    paddingHorizontal: 24,
    paddingVertical: 14,
    boxShadow: "0 4 4 0 rgba(0, 0, 0, 0.102)",
  },
});
