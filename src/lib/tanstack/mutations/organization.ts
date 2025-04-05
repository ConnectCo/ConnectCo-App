import { router } from "expo-router";

import { Alert } from "react-native";

import { useMutation } from "@tanstack/react-query";

import { AUTH } from "@/src/constants/auth";
import { ORGANIZATION } from "@/src/constants/organization";
import {
  createOrganization,
  likeOrganization,
  removeOrganization,
  updateOrganization,
} from "@/src/services/organization";

import { useUserStore } from "../../zustand/user";
import { invalidateQueries } from "../quries";

export const useCreateOrganization = () => {
  const { memberId } = useUserStore();

  return useMutation({
    mutationFn: createOrganization,
    onSuccess: (response) => {
      const { result } = response;
      Alert.alert("등록되었습니다.", "단체 등록이 완료되었습니다.");
      invalidateQueries([AUTH.PROFILE_LIST, memberId]);
      router.back();
    },
    onError: (error) => {
      console.error(error.message);
      Alert.alert("오류가 발생했습니다.", "다시 시도해주세요.");
    },
  });
};

export const useRemoveOrganization = () => {
  return useMutation({
    mutationFn: removeOrganization,
    onSuccess: () => {
      invalidateQueries([ORGANIZATION.MY_LIKE]);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useUpdateOrganization = (id: number) => {
  return useMutation({
    mutationFn: updateOrganization,
    onSuccess: () => {
      invalidateQueries([ORGANIZATION.DETAIL, id]);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useLikeOrganization = (id: number) => {
  return useMutation({
    mutationFn: likeOrganization,
    onSuccess: () => {
      invalidateQueries([ORGANIZATION.DETAIL, id]);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
