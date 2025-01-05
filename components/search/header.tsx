import { useRouter } from "expo-router";

import { StyleSheet, TextInput } from "react-native";

import { colors } from "@/constants/color";

import Button from "../common/button";
import Flex from "../common/flex";
import Header from "../common/header";
import Icon from "../common/icon";

export default function SearchHeader() {
  const router = useRouter();

  const onPressBack = () => {
    router.back();
  };

  return (
    <Header type="primary">
      <Flex direction="row" align="center" gap={12}>
        <Button onPress={onPressBack}>
          <Icon.ArrowLeft fill={colors.white} />
        </Button>
        <Flex gap={8} direction="row" style={[styles.flex, styles.container]}>
          <TextInput
            placeholderTextColor={colors.gray300}
            placeholder="예시) 간식행사"
            style={[styles.flex, styles.input]}
          />
          <Button>
            <Icon.Search fill={colors.primary300} />
          </Button>
        </Flex>
      </Flex>
    </Header>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    backgroundColor: colors.white,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  input: {
    fontWeight: 500,
  },
});
