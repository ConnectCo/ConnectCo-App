import { useSuspenseQuery } from "@tanstack/react-query";

import { api } from "@/src/apis";
import { AUTH } from "@/src/constants/auth";
import { BaseResponseDTO } from "@/src/models";
import { ProfileListDTO } from "@/src/models/auth";

import { useUserStore } from "../../zustand/user";

export const useGetProfileList = <T>() => {
  const { memberId } = useUserStore();

  return useSuspenseQuery({
    queryKey: [AUTH.PROFILE_LIST, memberId],
    queryFn: async (): Promise<BaseResponseDTO<ProfileListDTO>> => {
      const { data } = await api.get("/auth/get-profiles");
      return data;
    },
  });
};
