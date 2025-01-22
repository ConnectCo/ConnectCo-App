import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";

import { ScrollView, StyleSheet, View } from "react-native";

import BackHeader from "@/src/components/common/header/back-header";
import Text from "@/src/components/common/text";
import { colors } from "@/src/constants/color";

export default function ChatScreen() {
  const params = useLocalSearchParams();
  const { name, id } = params;

  return (
    <>
      <BackHeader title={name as string} call="010-3708-0438" />
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
      <ScrollView style={styles.container}>
        {/* 채팅 어떻게 보여줄지 로직 고민 후 퍼블리싱 하기 */}
      </ScrollView>
    </>
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
