import { useRouter } from "expo-router";

import { StyleSheet, View } from "react-native";

import Button from "../button";
import Icon from "../icon";
import Text from "../text";

import Header from ".";

interface BackHeaderProps {
  title: string;
}

export default function BackHeader({ title }: BackHeaderProps) {
  const router = useRouter();

  const onPressBack = () => {
    router.back();
  };

  return (
    <Header type="gray">
      <Button style={styles.section} onPress={onPressBack}>
        <Icon.ArrowLeft />
      </Button>
      <Text size="xl" weight="bold" align="center" style={styles.title}>
        {title}
      </Text>
      <View style={styles.section} />
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
});
