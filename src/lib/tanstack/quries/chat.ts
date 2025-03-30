import { useSuspenseQuery } from "@tanstack/react-query";

import { CHAT } from "@/src/constants/chat";
import { useUserStore } from "@/src/lib/zustand/user";
import { getChatList, getChatMessage } from "@/src/services/chat";

export const useGetChatList = () => {
  const { profileId } = useUserStore((state) => state);

  return useSuspenseQuery({
    queryKey: [CHAT.LIST],
    queryFn: () => getChatList(profileId as number),
  });
};

export const useGetChatMessage = (chatRoomId: number) => {
  return useSuspenseQuery({
    queryKey: [CHAT.ROOM, chatRoomId],
    queryFn: () => getChatMessage(chatRoomId),
  });
};
