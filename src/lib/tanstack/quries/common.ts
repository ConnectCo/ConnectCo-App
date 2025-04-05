import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { api } from "@/src/apis";
import { FILTER, LIST } from "@/src/constants/common";
import { COUPON } from "@/src/constants/coupon";
import { EVENT } from "@/src/constants/event";
import { SCREEN } from "@/src/constants/screen";
import { PROFILE } from "@/src/constants/user";
import { BaseResponseDTO, PaiginationDTO } from "@/src/models";

import { useUserStore } from "../../zustand/user";

export const useGetList = <T extends PaiginationDTO>({
  type,
  filter,
}: {
  type: SCREEN;
  filter: FILTER;
}) => {
  const prefix = type === SCREEN.EVENT ? "events" : "coupons";
  const userStore = useUserStore((state) => state);
  const paramsByStatus =
    userStore.status !== "authenticated"
      ? { latitude: userStore.latitude, longitude: userStore.longitude }
      : {};

  const params = {
    ...paramsByStatus,
    type: filter,
  };

  return useSuspenseInfiniteQuery({
    queryKey: [LIST.ALL, type, filter],
    queryFn: async ({ pageParam }) => {
      const { data } = await api.get<BaseResponseDTO<T>>(
        `/${prefix}/list?page=${pageParam}&size=10&${Object.entries(params)
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
      const result = data.pages
        .map((page) => {
          if ("events" in page.result) {
            return page.result.events;
          }
          if ("coupons" in page.result) {
            return page.result.coupons;
          }
          return [];
        })
        .flat();
      return {
        result,
      };
    },
  });
};

export const useGetMyItem = <T extends PaiginationDTO>(type: PROFILE) => {
  const profileId = useUserStore((state) => state.profileId);
  const prefix = type === PROFILE.ORGANIZATION ? "events" : "coupons";
  const queryKey = type === PROFILE.ORGANIZATION ? EVENT.MY_EVENT : COUPON.MY_COUPON;

  return useSuspenseInfiniteQuery({
    queryKey: [queryKey, profileId],
    queryFn: async ({ pageParam }) => {
      const { data } = await api.get<BaseResponseDTO<T>>(
        `/${prefix}/mine?page=${pageParam}&size=10`
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
      const result = data.pages
        .map((page) => {
          if ("events" in page.result) {
            return page.result.events;
          }
          if ("coupons" in page.result) {
            return page.result.coupons;
          }
          return [];
        })
        .flat();
      return {
        result,
      };
    },
  });
};

export const useGetMyLike = <T extends PaiginationDTO>(type: PROFILE) => {
  const profileId = useUserStore((state) => state.profileId);
  const prefix = type === PROFILE.ORGANIZATION ? "coupons" : "events";
  const queryKey = type === PROFILE.ORGANIZATION ? EVENT.MY_LIKE : COUPON.MY_LIKE;

  return useSuspenseInfiniteQuery({
    queryKey: [queryKey, profileId],
    queryFn: async ({ pageParam }) => {
      const { data } = await api.get<BaseResponseDTO<T>>(
        `/${prefix}/like?page=${pageParam}&size=10`
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
      const result = data.pages
        .map((page) => {
          if ("events" in page.result) {
            return page.result.events;
          }
          if ("coupons" in page.result) {
            return page.result.coupons;
          }
          return [];
        })
        .flat();
      return {
        result,
      };
    },
  });
};
