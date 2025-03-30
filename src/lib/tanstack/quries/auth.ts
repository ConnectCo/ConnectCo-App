import { useSuspenseQuery } from "@tanstack/react-query";

import { AUTH } from "@/src/constants/auth";
import { getProfileList } from "@/src/services/auth";

import { useUserStore } from "../../zustand/user";

export const useGetProfileList = () => {
  const { memberId } = useUserStore();

  return useSuspenseQuery({
    queryKey: [AUTH.PROFILE_LIST, memberId],
    queryFn: getProfileList,
  });
};
