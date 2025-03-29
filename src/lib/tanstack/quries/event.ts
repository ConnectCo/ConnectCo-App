import { useSuspenseInfiniteQuery, useSuspenseQuery } from "@tanstack/react-query";

import { api } from "@/src/apis";
import { FILTER } from "@/src/constants/common";
import { EVENT } from "@/src/constants/event";
import { BaseResponseDTO } from "@/src/models";
import { EventDetailDTO, EventListDTO } from "@/src/models/event";

import { useUserStore } from "../../zustand/user";

export const useGetEventList = <T extends EventListDTO>(type: FILTER) => {
  const userStore = useUserStore((state) => state);
  const paramsByStatus =
    userStore.status !== "authenticated"
      ? { latitude: userStore.latitude, longitude: userStore.longitude }
      : {};

  const params = {
    ...paramsByStatus,
    type,
  };

  return useSuspenseInfiniteQuery({
    queryKey: [EVENT.LIST, type],
    queryFn: async ({ pageParam }) => {
      const { data } = await api.get<BaseResponseDTO<T>>(
        `/events/list?page=${pageParam}&size=10&${Object.entries(params)
          .map(([key, value]) => `${key}=${value}`)
          .join("&")}`
      );
      return data;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage?.result?.isLast) {
        return undefined;
      }
      return lastPage?.result?.page + 1;
    },
    select: (data) => {
      const result = data.pages.map((page) => page.result.events).flat();
      return {
        result,
      };
    },
  });
};

export const useGetEventDetail = <T extends EventDetailDTO>(id: number) => {
  return useSuspenseQuery({
    queryKey: [EVENT.DETAIL, id],
    queryFn: async () => {
      const { data } = await api.get<BaseResponseDTO<T>>(`/events/${id}/detail`);
      return data;
    },
  });
};
