import { useLocalSearchParams } from "expo-router";

import BackHeader from "@/src/components/common/header/back-header";
import Text from "@/src/components/common/text";

export default function ChatScreen() {
  const params = useLocalSearchParams();
  const { name, id } = params;

  return (
    <>
      <BackHeader title={name as string} call="010-3708-0438" />
    </>
  );
}
