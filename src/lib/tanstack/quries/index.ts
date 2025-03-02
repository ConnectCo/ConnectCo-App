import type { QueryKey, UseQueryOptions } from "@tanstack/react-query";
import { QueryClient, useSuspenseQuery } from "@tanstack/react-query";

import { api } from "@/src/apis";
import { mockApi } from "@/src/apis/mock";
import type { BaseResponseDTO } from "@/src/models";

interface CommonOptions {
  prefix: string;
  queryKey: QueryKey;
  url: string;
}

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

export const useCommonSuspenseQuery = <T>(
  { prefix, queryKey, url }: CommonOptions,
  options?: UseQueryOptions<BaseResponseDTO<T>>
) => {
  return useSuspenseQuery<BaseResponseDTO<T>>({
    ...options,
    queryKey,
    queryFn: async () => {
      const { data } = await api.get<BaseResponseDTO<T>>(`/${prefix}/${url}`);
      // const { data } = await mockApi.get(`/${prefix}/${url}`);
      return data;
    },
  });
};
