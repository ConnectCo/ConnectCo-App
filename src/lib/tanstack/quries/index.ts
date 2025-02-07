import type { QueryKey } from "@tanstack/react-query";
import { QueryClient, useSuspenseQuery } from "@tanstack/react-query";

// import { api } from "@/src/apis";
import { mockApi } from "@/src/apis/mock";
import type { BaseResponseDTO } from "@/src/models";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export const invalidateQueries = (queryKey: QueryKey) => {
  queryClient.invalidateQueries({ queryKey });
};

export const useCommonSuspenseQuery = <T>(prefix: string, queryKey: QueryKey, url: string) => {
  return useSuspenseQuery<BaseResponseDTO<T>>({
    queryKey,
    queryFn: async () => {
      // const { data } = await api.get<BaseResponseDTO<T>>(`/${prefix}/${url}`);
      const { data } = await mockApi.get(`/${prefix}/${url}`);
      return data;
    },
  });
};
