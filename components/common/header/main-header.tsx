import { Link } from "expo-router";

import { StyleSheet } from "react-native";

import { colors } from "@/constants/color";

import Flex from "../flex";
import Icon from "../icon";
import Text from "../text";

import Header from ".";

interface MainHeaderProps {
  title: string;
  type?: "event" | "coupon" | "map" | "mypage";
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

export default function MainHeader({ title, type = "event" }: MainHeaderProps) {
  const onlyAlarm = type === "map" || type === "mypage";
  const iconByScreen = onlyAlarm ? screens.slice(2) : screens;

  return (
    <Header>
      <Text size="xxl" weight={700} style={styles.text}>
        {title}
      </Text>
      <Flex direction="row" align="center" gap={4}>
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
});
