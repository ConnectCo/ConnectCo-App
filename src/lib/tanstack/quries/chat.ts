import type { QueryKey } from "@tanstack/react-query";

import { CHAT } from "@/src/constants/chat";

import { useCommonSuspenseQuery } from ".";

const useCommonChat = <T>(queryKey: QueryKey, url: string) => {
  return useCommonSuspenseQuery<T>("chat", queryKey, url);
};

export const useGetChatList = <T>() => {
  return useCommonChat<T>([CHAT.LIST], "rooms");
};

export const useGetChat = <T>(chatRoomId: number) => {
  return useCommonChat<T>([CHAT.ROOM, chatRoomId], `room/${chatRoomId}/chats`);
};
