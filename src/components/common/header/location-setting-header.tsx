import { useRouter } from "expo-router";

import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors } from "@/src/constants/color";

import Button from "../button";
import Flex from "../flex";
import Icon from "../icon";
import Text from "../text";

export default function LocationSettingHeader() {
  const router = useRouter();
  const { top } = useSafeAreaInsets();

  const onPressBack = () => {
    router.back();
  };

  return (
    <Flex
      direction="row"
      justify="between"
      align="center"
      style={[styles.innerContainer, { paddingTop: top }]}
    >
      <Flex style={[styles.section]} direction="row" justify="between" align="center">
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
    </Flex>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    paddingHorizontal: 24,
    backgroundColor: colors.white,
  },
  section: {
    flex: 1,
  },
});
