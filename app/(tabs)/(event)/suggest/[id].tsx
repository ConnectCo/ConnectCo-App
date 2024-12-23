import { useLocalSearchParams } from "expo-router";

import Text from "@/components/common/text";

export default function SuggestScreen() {
  const { id } = useLocalSearchParams();

  return <Text>SuggestScreen</Text>;
}
