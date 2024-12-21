import { SafeAreaView, StyleSheet, View } from "react-native";
import { colors } from "@/constants/color";

interface HeaderProps {
  type?: "primary" | "gray";
  children: React.ReactNode;
}

export default function Header({ type = "primary", children }: HeaderProps) {
  const backgroundColor = type === "primary" ? colors.primary200 : colors.gray100;
  return (
    <SafeAreaView style={{ backgroundColor }}>
      <View style={styles.innerContainer}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    paddingHorizontal: 24,
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
