import { Link } from "expo-router";

import { StyleSheet, View } from "react-native";

import { colors } from "@/src/constants/color";
import { SCREEN } from "@/src/constants/screen";
import { PROFILE } from "@/src/constants/user";
import { useUserStore } from "@/src/lib/zustand/user";

import Flex from "../flex";
import Icon from "../icon";
import Text from "../text";

import Header from ".";

interface MainHeaderProps {
  title: string;
  type?: SCREEN;
  center?: boolean;
}

const screens = [
  {
    href: "/add" as const,
    ScreenIcon: () => <Icon.Add />,
  },
  {
    href: "/search" as const,
    ScreenIcon: () => <Icon.Search />,
  },
  {
    href: "/alarm" as const,
    ScreenIcon: () => <Icon.Alarm />,
  },
];

export default function MainHeader({
  title,
  type = SCREEN.EVENT,
  center = false,
}: MainHeaderProps) {
  const userStore = useUserStore();

  const isStoreMode = userStore.profileType === PROFILE.STORE && type === SCREEN.EVENT;
  const isOrganizationMode =
    userStore.profileType === PROFILE.ORGANIZATION && type === SCREEN.COUPON;
  const onlyAlarm = type === SCREEN.MAP || type === SCREEN.MYPAGE;
  const withoutPlus =
    type === SCREEN.CHAT ||
    userStore.status !== "authenticated" ||
    isStoreMode ||
    isOrganizationMode;
  const iconByScreen = onlyAlarm ? screens.slice(2) : withoutPlus ? screens.slice(1) : screens;

  return (
    <Header>
      {center && <View style={styles.flex} />}
      <View style={styles.flex}>
        <Text size="xxl" weight={700} style={styles.text} align={center ? "center" : "left"}>
          {title}
        </Text>
      </View>
      <Flex direction="row" align="center" justify="end" gap={4} style={styles.flex}>
        {iconByScreen.map(({ href, ScreenIcon }, idx) => (
          <Link key={href} href={href === "/add" ? `/(${type})${href}` : href}>
            <ScreenIcon />
          </Link>
        ))}
      </Flex>
    </Header>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.white,
  },
  flex: {
    flex: 1,
  },
});
