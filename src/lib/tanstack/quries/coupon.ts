import { useSuspenseInfiniteQuery, useSuspenseQuery } from "@tanstack/react-query";

import { COUPON } from "@/src/constants/coupon";
import {
  getCouponById,
  getCouponBySearch,
  getCouponByStore,
  getMyCoupon,
  getMyLikeCoupon,
} from "@/src/services/coupon";

export const useGetCouponDetail = (id: number) => {
  return useSuspenseQuery({
    queryKey: [COUPON.DETAIL, id],
    queryFn: async () => await getCouponById(id),
  });
};

export const useGetMyLikeCoupon = () => {
  return useSuspenseInfiniteQuery({
    queryKey: [COUPON.MY_LIKE],
    queryFn: async ({ pageParam }) => await getMyLikeCoupon(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.result.isLast) {
        return undefined;
      }
      return lastPage.result.page + 1;
    },
    select: (data) => {
      const result = data.pages.map((page) => page.result.coupons).flat();
      return {
        result,
      };
    },
  });
};

export const useGetMyCouponList = () => {
  return useSuspenseInfiniteQuery({
    queryKey: [COUPON.MY_COUPON],
    queryFn: async ({ pageParam }) => await getMyCoupon(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.result.isLast) {
        return undefined;
      }
      return lastPage.result.page + 1;
    },
    select: (data) => {
      const result = data.pages.map((page) => page.result.coupons).flat();
      return {
        result,
      };
    },
  });
};

export const useGetCouponByStore = (storeId: number) => {
  return useSuspenseInfiniteQuery({
    queryKey: [COUPON.ORGANIZATION, storeId],
    queryFn: async ({ pageParam }) => await getCouponByStore({ storeId: storeId, page: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.result.isLast) {
        return undefined;
      }
      return lastPage.result.page + 1;
    },
    select: (data) => {
      const result = data.pages.map((page) => page.result.coupons).flat();
      return {
        result,
      };
    },
  });
};

export const useGetCouponBySearch = (query: string) => {
  return useSuspenseInfiniteQuery({
    queryKey: [COUPON.SEARCH, query],
    queryFn: async ({ pageParam }) => await getCouponBySearch({ query, page: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.result.isLast) {
        return undefined;
      }
      return lastPage.result.page + 1;
    },
    select: (data) => {
      const result = data.pages.map((page) => page.result.coupons).flat();
      return {
        result,
      };
    },
  });
};
