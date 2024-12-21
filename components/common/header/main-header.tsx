import { StyleSheet, View } from "react-native";
import Header from ".";
import Icon from "../icon";
import Text from "../text";
import { colors } from "@/constants/color";
import { Link } from "expo-router";

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
      <View style={styles.buttonsWrap}>
        {screens.map(({ href, ScreenIcon }) => (
          <Link key={href} href={href}>
            <ScreenIcon />
          </Link>
        ))}
      </View>
    </Header>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontWeight: 700,
  },
  buttonsWrap: {
    flexDirection: "row",
    gap: 4,
  },
});
