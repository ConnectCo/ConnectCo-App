import { Alert } from "react-native";

import { useMutation } from "@tanstack/react-query";

import { AUTH } from "@/src/constants/auth";
import { login, logout, removeProfile, selectProfile, withdraw } from "@/src/services/auth";
import { setItem } from "@/src/utils/secure-store";

import { useUserStore } from "../../zustand/user";
import { queryClient } from "../quries";

export const useRemoveProfileMutation = () => {
  return useMutation({
    mutationFn: removeProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [AUTH.PROFILE_LIST] });
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useOauth2Mutation = () => {
  const setUser = useUserStore((state) => state.setUser);

  return useMutation({
    mutationFn: login,
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

export const useLogoutMutation = () => {
  const setUser = useUserStore((state) => state.setUser);

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      setItem("accessToken", "");
      setItem("refreshToken", "");
      setUser({
        status: "anonymous",
      });
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
export const useSelectProfileMutation = () => {
  const setUser = useUserStore((state) => state.setUser);

  return useMutation({
    mutationFn: selectProfile,
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

export const useWithdrawMutation = () => {
  return useMutation({
    mutationFn: withdraw,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [AUTH.PROFILE_LIST] });
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
