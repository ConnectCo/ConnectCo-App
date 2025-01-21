import { useRouter } from "expo-router";

import { Linking, StyleSheet, View } from "react-native";

import { colors } from "@/src/constants/color";

import Button from "../button";
import Flex from "../flex";
import Icon from "../icon";
import Text from "../text";

import Header from ".";

interface BackHeaderProps {
  children?: React.ReactNode;
  title: string;
  call?: string;
  type?: "primary" | "gray";
}

export default function BackHeader({ children, title, call, type = "gray" }: BackHeaderProps) {
  const router = useRouter();
  const { color } = styles[type];

  const onPressBack = () => {
    router.back();
  };

  const onPressCall = () => {
    Linking.openURL(`tel:${call}`).catch((err) => {
      console.error("Failed to open URL:", err);
    });
  };

  return (
    <Header type={type}>
      <Flex style={styles.section} gap={16}>
        <Flex direction="row">
          <Button style={styles.section} onPress={onPressBack}>
            <Icon.ArrowLeft fill={color} />
          </Button>
          <Text size="xxl" weight={700} align="center" style={[styles.title, { color }]}>
            {title}
          </Text>
          <View style={styles.section}>
            {call && (
              <Button style={styles.button} onPress={onPressCall}>
                <Icon.Phone fill={color} />
              </Button>
            )}
          </View>
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
  button: {
    alignSelf: "flex-end",
  },
  gray: {
    color: colors.black,
  },
  primary: {
    color: colors.white,
  },
});
