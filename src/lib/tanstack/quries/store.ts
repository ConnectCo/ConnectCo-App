import { useSuspenseQuery } from "@tanstack/react-query";

import { api } from "@/src/apis";
import { mockApi } from "@/src/apis/mock";
import { STORE } from "@/src/constants/store";
import { BaseResponseDTO } from "@/src/models";

export const useGetStoreDetail = <T>(id: number) => {
  return useSuspenseQuery({
    queryKey: [STORE.DETAIL, id],
    queryFn: async () => {
      const { data } = await api.get<BaseResponseDTO<T>>(`/stores/${id}/detail`);
      //   const { data } = await mockApi.get(`/stores/${id}/detail`);
      return data;
    },
  });
};
