import { Stack } from "expo-router";

import BackHeader from "../common/header/back-header";

export const eventStacks = () => [
  <Stack.Screen
    key="event-add"
    name="(event)/add"
    options={{
      header: () => <BackHeader type="primary" title="이벤트 등록하기" />,
    }}
  />,
  <Stack.Screen
    key="event-detail"
    name="(event)/[id]"
    options={{
      header: () => <BackHeader title="이벤트 상세보기" />,
    }}
  />,
  <Stack.Screen
    key="event-college"
    name="(event)/college/[id]"
    options={{
      headerShown: false,
    }}
  />,
  <Stack.Screen
    key="event-suggest"
    name="(event)/suggest/[id]"
    options={{
      header: () => <BackHeader type="primary" title="협찬 제안 정보" />,
    }}
  />,
];
