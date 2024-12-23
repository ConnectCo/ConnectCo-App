import * as Linking from "expo-linking";

import { StyleSheet } from "react-native";

import Button from "@/components/common/button";
import Flex from "@/components/common/flex";
import BackHeader from "@/components/common/header/back-header";
import Icon from "@/components/common/icon";
import Text from "@/components/common/text";
import { colors } from "@/constants/color";

export default function College() {
  const openURL = (url: string) => {
    Linking.openURL(url).catch((err) => {
      console.error("Failed to open URL:", err);
    });
  };
  return (
    <BackHeader title="한양대학교">
      <Flex direction="row" justify="center" gap={20}>
        <Flex gap={4} align="center">
          <Button onPress={() => openURL("https://www.hanyang.ac.kr")} style={styles.button}>
            <Icon.Home />
          </Button>
          <Text size="sm">홈페이지</Text>
        </Flex>
        <Flex gap={4} align="center">
          <Button
            onPress={() => openURL("https://www.hanyang.ac.kr/web/www/-33")}
            style={styles.button}
          >
            <Icon.Calendar />
          </Button>
          <Text size="sm">학사일정</Text>
        </Flex>
      </Flex>
    </BackHeader>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 5,
    borderRadius: 15,
    backgroundColor: colors.white,
    boxShadow: "0 0 2 1 rgba(0, 0, 0, 0.25)",
  },
});
