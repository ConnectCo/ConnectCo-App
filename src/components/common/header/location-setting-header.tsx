import { useRouter } from "expo-router";

import { StyleSheet, View } from "react-native";

import { colors } from "@/src/constants/color";

import Button from "../button";
import Flex from "../flex";
import Icon from "../icon";
import Text from "../text";

import Header from ".";

export default function LocationSettingHeader() {
  const router = useRouter();

  const onPressBack = () => {
    router.back();
  };

  return (
    <Header type="gray">
      <Flex style={styles.section} direction="row" justify="between" align="center">
        <Button onPress={onPressBack}>
          <Icon.ArrowLeft fill={colors.black} />
        </Button>
        <Text size="xxl" weight={700} align="center">
          위치 설정
        </Text>
        <Button>
          <Text>편집</Text>
        </Button>
      </Flex>
    </Header>
  );
}

const styles = StyleSheet.create({
  section: {
    flex: 1,
  },
});
