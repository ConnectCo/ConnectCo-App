import { useMutation } from "@tanstack/react-query";

import { LIST } from "@/src/constants/common";
import { EVENT } from "@/src/constants/event";
import { SCREEN } from "@/src/constants/screen";
import { createEvent, likeEvent, removeEvent, updateEvent } from "@/src/services/event";

import { invalidateQueries, queryClient } from "../quries";

export const useCreateEvent = () => {
  return useMutation({
    mutationFn: createEvent,
    onSuccess: () => {
      invalidateQueries([EVENT.MY_EVENT]);
      invalidateQueries([LIST.ALL, SCREEN.EVENT]);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useRemoveEvent = () => {
  return useMutation({
    mutationFn: removeEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [EVENT.LIST] });
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useUpdateEvent = (id: number) => {
  return useMutation({
    mutationFn: updateEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [EVENT.LIST] });
      queryClient.invalidateQueries({ queryKey: [EVENT.DETAIL, id] });
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useLikeEvent = (id: number) => {
  return useMutation({
    mutationFn: likeEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [EVENT.DETAIL, id] });
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
