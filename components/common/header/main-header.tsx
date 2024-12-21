import { StyleSheet } from "react-native";
import Header from ".";
import Icon from "../icon";
import Text from "../text";
import { colors } from "@/constants/color";
import { Link } from "expo-router";
import Flex from "../flex";

interface MainHeaderProps {
  title: string;
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

export default function MainHeader({ title }: MainHeaderProps) {
  return (
    <Header>
      <Text size="lg" style={styles.text}>
        {title}
      </Text>
      <Flex direction="row" align="center" gap={4}>
        {screens.map(({ href, ScreenIcon }) => (
          <Link key={href} href={href}>
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
    fontWeight: 700,
  },
});
