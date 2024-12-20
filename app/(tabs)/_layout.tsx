import Icon from "@/components/common/icon";
import { colors, ColorValueType } from "@/constants/color";
import { Tabs } from "expo-router";

interface IconProps {
  fill: ColorValueType;
}

const SCREENS = [
  {
    name: "(event)",
    title: "이벤트",
    TabBarIcon: ({ fill }: IconProps) => <Icon.Event fill={fill} />,
  },
  {
    name: "(coupon)",
    title: "쿠폰",
    TabBarIcon: ({ fill }: IconProps) => <Icon.Coupon fill={fill} />,
  },
  { name: "(map)", title: "내주변", TabBarIcon: ({ fill }: IconProps) => <Icon.Map fill={fill} /> },
  { name: "(chat)", title: "채팅", TabBarIcon: ({ fill }: IconProps) => <Icon.Chat fill={fill} /> },
  {
    name: "(mypage)",
    title: "마이페이지",
    TabBarIcon: ({ fill }: IconProps) => <Icon.Mypage fill={fill} />,
  },
];

const tabsScreenOptions = {
  headerShown: false,
  tabBarStyle: {
    height: 90,
    paddingTop: 12,
    borderTopWidth: 0,
    shadowOffset: {
      width: 0,
      height: -8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 10,
  },
};

export default function TabNavigationLayout() {
  return (
    <Tabs screenOptions={tabsScreenOptions}>
      {SCREENS.map(({ name, title, TabBarIcon }, idx) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title,
            tabBarIcon: ({ focused }) => (
              <TabBarIcon fill={focused ? colors.primary200 : colors.gray400} />
            ),
            tabBarActiveTintColor: colors.primary200,
            tabBarInactiveTintColor: colors.gray400,
            tabBarLabelStyle: {
              marginTop: 6,
            },
            headerShown: false,
          }}
        />
      ))}
    </Tabs>
  );
}
