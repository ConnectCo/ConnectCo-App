import { useSuspenseInfiniteQuery, useSuspenseQuery } from "@tanstack/react-query";

import { EVENT } from "@/src/constants/event";
import {
  getEventById,
  getEventByOrganization,
  getEventBySearch,
  getMyEvent,
  getMyLikeEvent,
} from "@/src/services/event";

export const useGetEventDetail = (id: number) => {
  return useSuspenseQuery({
    queryKey: [EVENT.DETAIL, id],
    queryFn: async () => await getEventById(id),
  });
};

export const useGetMyLikeEvent = () => {
  return useSuspenseInfiniteQuery({
    queryKey: [EVENT.MY_LIKE],
    queryFn: async ({ pageParam }) => await getMyLikeEvent(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.result.isLast) {
        return undefined;
      }
      return lastPage.result.page + 1;
    },
    select: (data) => {
      const result = data.pages.map((page) => page.result.events).flat();
      return {
        result,
      };
    },
  });
};

export const useGetMyEventList = () => {
  return useSuspenseInfiniteQuery({
    queryKey: [EVENT.MY_EVENT],
    queryFn: async ({ pageParam }) => await getMyEvent(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.result.isLast) {
        return undefined;
      }
      return lastPage.result.page + 1;
    },
    select: (data) => {
      const result = data.pages.map((page) => page.result.events).flat();
      return {
        result,
      };
    },
  });
};

export const useGetEventByOrganization = (organizationId: number) => {
  return useSuspenseInfiniteQuery({
    queryKey: [EVENT.ORGANIZATION, organizationId],
    queryFn: async ({ pageParam }) =>
      await getEventByOrganization({ organizationId, page: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.result.isLast) {
        return undefined;
      }
      return lastPage.result.page + 1;
    },
    select: (data) => {
      const result = data.pages.map((page) => page.result.events).flat();
      return {
        result,
      };
    },
  });
};

export const useGetEventBySearch = (query: string) => {
  return useSuspenseInfiniteQuery({
    queryKey: [EVENT.SEARCH, query],
    queryFn: async ({ pageParam }) => await getEventBySearch({ query, page: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.result.isLast) {
        return undefined;
      }
      return lastPage.result.page + 1;
    },
    select: (data) => {
      const result = data.pages.map((page) => page.result.events).flat();
      return {
        result,
      };
    },
  });
};
