import { useMutation } from "@tanstack/react-query";

import { api } from "@/src/apis";
import { OAUTH2 } from "@/src/constants/oauth";
import { MutationResponseDTO } from "@/src/models";
import { OAuthDTO } from "@/src/models/auth";
import { setItem } from "@/src/utils/secure-store";

import { useUserStore } from "../../zustand/user";

interface AuthMutationProps {
  accessToken: string;
  provider: OAUTH2;
}

export const useOauth2Mutation = () => {
  const setUser = useUserStore((state) => state.setUser);

  return useMutation({
    mutationFn: async ({
      accessToken,
      provider,
    }: AuthMutationProps): Promise<MutationResponseDTO<OAuthDTO>> =>
      await api.post(`/auth/login?accessToken=${accessToken}&provider=${provider}`),
    onSuccess: async (response) => {
      const { accessToken, refreshToken, ...restResults } = response.data.result;
      await setItem("accessToken", response.data.result.accessToken);
      await setItem("refreshToken", response.data.result.refreshToken);
      setUser({ ...restResults, status: "select-profile" });
    },
  });
};
