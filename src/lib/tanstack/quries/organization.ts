import { useSuspenseInfiniteQuery, useSuspenseQuery } from "@tanstack/react-query";

import { ORGANIZATION } from "@/src/constants/organization";
import { getMyLikeOrganization, getOrganizationById } from "@/src/services/organization";

export const useGetOrganizationById = (id: number) => {
  return useSuspenseQuery({
    queryKey: [ORGANIZATION.DETAIL, id],
    queryFn: async () => await getOrganizationById(id),
  });
};

export const useGetMyLikeOrganization = () => {
  return useSuspenseInfiniteQuery({
    queryKey: [ORGANIZATION.MY_LIKE],
    queryFn: async ({ pageParam }) => await getMyLikeOrganization(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.result.isLast) {
        return undefined;
      }
      return lastPage.result.page + 1;
    },
    select: (data) => {
      const result = data.pages.map((page) => page.result.organizations).flat();
      return {
        result,
      };
    },
  });
};
