import { type QueryKey, useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { api } from "@/src/apis";
import { mockApi } from "@/src/apis/mock";
import { FILTER } from "@/src/constants/common";
import { COUPON } from "@/src/constants/coupon";
import type { BaseResponseDTO } from "@/src/models";
import type { CouponListDTO } from "@/src/models/coupon";

import { useUserStore } from "../../zustand/user";

import { useCommonSuspenseQuery } from ".";

const useCommonCoupon = <T>(queryKey: QueryKey, url: string) => {
  return useCommonSuspenseQuery<T>({ prefix: "coupons", queryKey, url });
};

export const useGetCouponList = <T extends CouponListDTO>(type: FILTER) => {
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
    queryKey: [COUPON.LIST],
    queryFn: async ({ pageParam }) => {
      const { data } = await api.get<BaseResponseDTO<T>>(
        `/coupons?page=${pageParam}&size=10&${Object.entries(params)
          .map(([key, value]) => `${key}=${value}`)
          .join("&")}`
      );
      // const { data } = await mockApi.get(`/coupons/deadline?page=${pageParam}&size=10`);
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
      const result = data.pages.map((page) => page.result.coupons).flat();
      return {
        result,
      };
    },
  });
};

export const useGetCouponDetail = <T>(id: number) => {
  return useCommonCoupon<T>([COUPON.DETAIL, id], `${id}/detail`);
};
