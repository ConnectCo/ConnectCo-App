import { useSuspenseInfiniteQuery, useSuspenseQuery } from "@tanstack/react-query";

import { STORE } from "@/src/constants/store";
import { getMyLikeStore, getStoreById } from "@/src/services/store";

export const useGetStoreDetail = (id: number) => {
  return useSuspenseQuery({
    queryKey: [STORE.DETAIL, id],
    queryFn: async () => await getStoreById(id),
  });
};

export const useGetStoreList = () => {
  return useSuspenseInfiniteQuery({
    queryKey: [STORE.LIST],
    queryFn: async ({ pageParam }) => await getMyLikeStore(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage?.result?.isLast) {
        return undefined;
      }
      return lastPage?.result?.page + 1;
    },
    select: (data) => {
      const result = data.pages.map((page) => page.result.stores).flat();
      return {
        result,
      };
    },
  });
};
