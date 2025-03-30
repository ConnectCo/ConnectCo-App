import { useMutation } from "@tanstack/react-query";

import { EVENT } from "@/src/constants/event";
import { createEvent, likeEvent, removeEvent, updateEvent } from "@/src/services/event";

import { queryClient } from "../quries";

export const useCreateEvent = () => {
  return useMutation({
    mutationFn: createEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [EVENT.LIST] });
    },
    onError: (error) => {
      console.log(error);
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
      console.log(error);
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
      console.log(error);
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
      console.log(error);
    },
  });
};
