import { useSuspenseQueries } from "@tanstack/react-query";

import { api } from "@/src/apis";
import { mockApi } from "@/src/apis/mock";
import { STORE } from "@/src/constants/store";
import { BaseResponseDTO } from "@/src/models";

export const useGetStoreDetail = <T, K>(id: number) => {
  return useSuspenseQueries({
    queries: [
      {
        queryKey: [STORE.COUPON, id],
        queryFn: async () => {
          const { data } = await api.get<BaseResponseDTO<T>>(`/coupons/store/${id}?page=0&size=10`);
          //   const { data } = await mockApi.get(`/coupons/store/${id}?page=0&size=10`);
          return data;
        },
      },
      {
        queryKey: [STORE.DETAIL, id],
        queryFn: async () => {
          const { data } = await api.get<BaseResponseDTO<K>>(`/stores/${id}/detail`);
          //   const { data } = await mockApi.get(`/stores/${id}/detail`);
          return data;
        },
      },
    ],
  });
};
