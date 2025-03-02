import { type QueryKey, useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { api } from "@/src/apis";
import { mockApi } from "@/src/apis/mock";
import { COUPON } from "@/src/constants/coupon";
import type { BaseResponseDTO } from "@/src/models";
import type { CouponListDTO } from "@/src/models/coupon";

import { useCommonSuspenseQuery } from ".";

const useCommonCoupon = <T>(queryKey: QueryKey, url: string) => {
  return useCommonSuspenseQuery<T>({ prefix: "coupons", queryKey, url });
};

export const useGetCouponList = <T extends CouponListDTO>() => {
  return useSuspenseInfiniteQuery({
    queryKey: [COUPON.LIST],
    queryFn: async ({ pageParam }) => {
      const { data } = await api.get<BaseResponseDTO<T>>(
        `/coupons/deadline?page=${pageParam}&size=10`
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
