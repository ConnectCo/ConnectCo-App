import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors } from "@/constants/color";
import { ImageProps } from "@/types/image";

import Button from "../button";
import TextButton from "../button/text-button";
import Container from "../container";
import Flex from "../flex";
import Icon from "../icon";
import ImageScroll from "../image-scroll";
import Text from "../text";

interface CommonDetailProps {
  profile?: {
    name: string;
    id: string;
  };
  images: ImageProps[];
  title: string;
  endDate?: string;
  description: string;
  selected: boolean;
  children: React.ReactNode;
  type?: "event" | "coupon" | "store";
  onPressFavorite: () => void;
  onRouteProfile?: () => void;
  onRouteSwag: () => void;
  onRouteChat: () => void;
}

export default function CommonDetail({
  profile,
  images,
  title,
  endDate,
  description,
  selected,
  children,
  type = "event",
  onPressFavorite,
  onRouteProfile,
  onRouteSwag,
  onRouteChat,
}: CommonDetailProps) {
  const { bottom } = useSafeAreaInsets();
  const isStore = type === "store";
  const button = isStore ? "전화걸기" : `협찬 ${type === "event" ? "제안" : "신청"}`;

  return (
    <ScrollView style={styles.container}>
      <ImageScroll images={images} />
      {!isStore && (
        <Button onPress={onRouteProfile}>
          <Flex direction="row" align="center" justify="between" style={styles.wrap}>
            <Text weight={600} style={styles.profile}>
              {profile?.name}
            </Text>
            <Icon.ArrowRight fill={colors.gray500} />
          </Flex>
        </Button>
      )}
      <Container as="View" style={{ paddingBottom: bottom }}>
        <Flex gap={10}>
          <Flex direction="row" justify="between" align="center">
            <Text size="xxl" weight={600}>
              {title}
            </Text>
            <Button onPress={onPressFavorite}>
              <Icon.Favorite selected={selected} />
            </Button>
          </Flex>
          {endDate && (
            <Text weight={600} style={styles.endDate}>
              신청마감일 : {endDate}
            </Text>
          )}
          <Text>{description}</Text>
        </Flex>
        <View style={styles.divider} />
        <Flex gap={50}>
          <Flex gap={25}>{children}</Flex>
          <Flex direction="row" gap={12}>
            <TextButton onPress={onRouteChat} style={styles.button} type="outline">
              1:1 채팅
            </TextButton>
            <TextButton onPress={onRouteSwag} style={styles.button}>
              {button}
            </TextButton>
          </Flex>
        </Flex>
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  wrap: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: colors.gray100,
  },
  profile: {
    color: colors.gray500,
  },
  endDate: {
    color: colors.gray500,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: colors.gray300,
    marginVertical: 20,
  },
  button: {
    flex: 1,
  },
});
