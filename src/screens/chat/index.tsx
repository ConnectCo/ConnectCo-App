import { useLocalSearchParams } from "expo-router";

import { Suspense } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";

import ChatMessage from "@/src/components/chat/chat-message";
import BackHeader from "@/src/components/common/header/back-header";
import Loading from "@/src/components/common/loading";
import { colors } from "@/src/constants/color";

export default function ChatScreen() {
  const params = useLocalSearchParams();
  const { otherMemberName } = params;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
    >
      <BackHeader title={otherMemberName as string} />
      <Suspense fallback={<Loading />}>
        <ChatMessage />
      </Suspense>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
