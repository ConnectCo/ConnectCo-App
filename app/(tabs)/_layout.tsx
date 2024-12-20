import { Tabs } from "expo-router";

const SCREENS = [
  { name: "(event)", title: "이벤트" },
  { name: "(coupon)", title: "쿠폰" },
  { name: "(map)", title: "내주변" },
  { name: "(chat)", title: "채팅" },
  { name: "(mypage)", title: "마이페이지" },
];

export default function TabNavigationLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      {SCREENS.map(({ name, title }) => (
        <Tabs.Screen key={name} name={name} options={{ title }} />
      ))}
    </Tabs>
  );
}
