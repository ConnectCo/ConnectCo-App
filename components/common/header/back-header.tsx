import { useRouter } from "expo-router";

import { StyleSheet, View } from "react-native";

import { colors } from "@/constants/color";

import Button from "../button";
import Flex from "../flex";
import Icon from "../icon";
import Text from "../text";

import Header from ".";

interface BackHeaderProps {
  children?: React.ReactNode;
  title: string;
  type?: "primary" | "gray";
}

export default function BackHeader({ children, title, type = "gray" }: BackHeaderProps) {
  const router = useRouter();
  const { color } = styles[type];

  const onPressBack = () => {
    router.back();
  };

  return (
    <Header type={type}>
      <Flex style={styles.section} gap={10}>
        <Flex direction="row">
          <Button style={styles.section} onPress={onPressBack}>
            <Icon.ArrowLeft fill={color} />
          </Button>
          <Text size="xl" weight={700} align="center" style={[styles.title, { color }]}>
            {title}
          </Text>
          <View style={styles.section} />
        </Flex>
        {children}
      </Flex>
    </Header>
  );
}

const styles = StyleSheet.create({
  section: {
    flex: 1,
  },
  title: {
    flex: 2,
  },
  gray: {
    color: colors.black,
  },
  primary: {
    color: colors.white,
  },
});
