import { router } from "expo-router";

import { useMutation } from "@tanstack/react-query";

import { CHAT } from "@/src/constants/chat";
import { createChatRoom, enterChatRoom } from "@/src/services/chat";

import { invalidateQueries } from "../quries";

export const useEnterChatRoom = () => {
  return useMutation({
    mutationFn: enterChatRoom,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useCreateChatRoom = () => {
  return useMutation({
    mutationFn: createChatRoom,
    onSuccess: (data) => {
      invalidateQueries([CHAT.LIST]);
      router.push("/(tabs)/(chat)");
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
