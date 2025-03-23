import { Alert } from "react-native";

import { useMutation } from "@tanstack/react-query";

import { api } from "@/src/apis";
import { OAUTH2 } from "@/src/constants/auth";
import { PROFILE } from "@/src/constants/user";
import { BaseResponseDTO } from "@/src/models";
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
    }: AuthMutationProps): Promise<BaseResponseDTO<OAuthDTO>> => {
      const { data } = await api.post(
        `/auth/login?accessToken=${accessToken}&provider=${provider}`
      );
      return data;
    },
    onSuccess: async (response) => {
      const { result } = response;
      await setItem("accessToken", result.accessToken);
      await setItem("refreshToken", result.refreshToken);
      setUser({
        memberId: result.memberId,
        profileId: result.profile.profileId,
        profileType: result.profile.profileType,
        status: "select-profile",
      });
    },
  });
};

export const useSelectProfileMutation = () => {
  const setUser = useUserStore((state) => state.setUser);

  return useMutation({
    mutationFn: async ({
      profileId,
      profileType,
    }: {
      profileId: number;
      profileType: PROFILE;
    }): Promise<BaseResponseDTO<OAuthDTO>> => {
      const { data } = await api.post(
        `/auth/select-profile?profileId=${profileId}&profileType=${profileType}`
      );
      return data;
    },
    onSuccess: async (response) => {
      const { result } = response;
      await setItem("accessToken", result.accessToken);
      await setItem("refreshToken", result.refreshToken);
      setUser({
        memberId: result.memberId,
        profileId: result.profile.profileId,
        profileType: result.profile.profileType,
        status: "authenticated",
      });
      Alert.alert("프로필 선택 완료");
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
