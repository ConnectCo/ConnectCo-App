import MainHeader from "@/components/common/header/main-header";
import { Stack } from "expo-router";

export default function EventLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => <MainHeader title="이벤트" />,
        }}
      />
    </Stack>
  );
}
