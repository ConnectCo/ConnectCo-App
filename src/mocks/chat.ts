import { http, HttpResponse } from "msw";

import { generateMock } from "@/src/utils/mock";

const baseUrl = process.env.EXPO_PUBLIC_BASE_URL;

export const chatHandlers = [
  http.get(`${baseUrl}/chat/rooms`, () => {
    return HttpResponse.json(
      generateMock([
        {
          chatRoomId: 1,
          otherMemberId: 1,
          otherMemberName: "호말커피",
          recentMessage: "ChatScreen",
          recentMessageTime: "2025-01-10T14:20:58",
          profileImage: require("@/src/assets/static/homeal.png"),
          unreadCount: 1,
        },
        {
          chatRoomId: 2,
          otherMemberId: 2,
          otherMemberName: "커피빈",
          recentMessage: "Hello there!",
          recentMessageTime: "2025-01-10T14:20:58",
          profileImage: require("@/src/assets/static/homeal.png"),
          unreadCount: 2,
        },
        {
          chatRoomId: 3,
          otherMemberId: 3,
          otherMemberName: "스타벅스",
          recentMessage: "How are you?",
          recentMessageTime: "2025-01-10T14:20:58",
          profileImage: require("@/src/assets/static/homeal.png"),
          unreadCount: 0,
        },
        {
          chatRoomId: 4,
          otherMemberId: 4,
          otherMemberName: "이디야",
          recentMessage: "Let's meet up.",
          recentMessageTime: "2025-01-10T14:20:58",
          profileImage: require("@/src/assets/static/homeal.png"),
          unreadCount: 3,
        },
      ])
    );
  }),
];
