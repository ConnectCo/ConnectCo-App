import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";

import { Suspense } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";

import ChatMessage from "@/src/components/chat/chat-message";
import BackHeader from "@/src/components/common/header/back-header";
import Loading from "@/src/components/common/loading";
import Text from "@/src/components/common/text";
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
      <BackHeader title={otherMemberName as string} call="010-3708-0438" />
      <View style={styles.card}>
        <Image source={require("@/src/assets/static/homeal.png")} style={styles.image} />
        <View style={styles.text}>
          <Text size="sm" weight={500} style={styles.status}>
            협찬 진행 중
          </Text>
          <Text size="lg" weight={600} numberOfLines={1}>
            쿠키 무료 제공 쿠폰 (50매)
          </Text>
          <Text size="sm">~2023.10.29 까지 사용</Text>
        </View>
      </View>
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
  card: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 12,
    gap: 16,
    borderBottomWidth: 1,
    borderColor: colors.gray300,
    backgroundColor: colors.white,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  text: {
    justifyContent: "space-between",
    flex: 1,
    alignSelf: "stretch",
  },
  status: {
    color: colors.primary300,
  },
});
