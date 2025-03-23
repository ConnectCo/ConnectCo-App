import type { QueryKey } from "@tanstack/react-query";

import { CHAT } from "@/src/constants/chat";
import { useUserStore } from "@/src/lib/zustand/user";

import { useCommonSuspenseQuery } from ".";

const useCommonChat = <T>(queryKey: QueryKey, url: string) => {
  return useCommonSuspenseQuery<T>({ prefix: "chat", queryKey, url });
};

export const useGetChatList = <T>() => {
  const { profileId } = useUserStore((state) => state);
  return useCommonChat<T>([CHAT.LIST], `rooms?profileId=${profileId}`);
};

export const useGetChat = <T>(chatRoomId: number) => {
  return useCommonChat<T>([CHAT.ROOM, chatRoomId], `room/${chatRoomId}/chats`);
};
