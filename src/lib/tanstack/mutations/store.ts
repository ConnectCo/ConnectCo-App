import { router } from "expo-router";

import { Alert } from "react-native";

import { useMutation } from "@tanstack/react-query";

import { AUTH } from "@/src/constants/auth";
import { createStore, likeStore, removeStore, updateStore } from "@/src/services/store";

import { useUserStore } from "../../zustand/user";
import { invalidateQueries } from "../quries";

export const useCreateStore = () => {
  const { memberId } = useUserStore();

  return useMutation({
    mutationFn: createStore,
    onSuccess: (response) => {
      const { result } = response;
      console.log(result);
      Alert.alert("등록되었습니다.", "가게 등록이 완료되었습니다.");
      invalidateQueries([AUTH.PROFILE_LIST, memberId]);
      router.back();
    },
    onError: (error) => {
      console.error(error.cause, error.message, error.name, error.stack);
      Alert.alert("오류가 발생했습니다.", "다시 시도해주세요.");
    },
  });
};

export const useRemoveStore = () => {
  return useMutation({
    mutationFn: removeStore,
    onSuccess: (data) => {
      console.log("삭제되었습니다.", data);
    },
    onError: (error) => {
      console.error(error.cause, error.message, error.name, error.stack);
      Alert.alert("오류가 발생했습니다.", "다시 시도해주세요.");
    },
  });
};

export const useUpdateStore = () => {
  return useMutation({
    mutationFn: updateStore,
    onSuccess: (data) => {
      console.log("수정되었습니다.", data);
    },
    onError: (error) => {
      console.error(error.cause, error.message, error.name, error.stack);
      Alert.alert("오류가 발생했습니다.", "다시 시도해주세요.");
    },
  });
};

export const useLikeStore = () => {
  return useMutation({
    mutationFn: likeStore,
    onSuccess: (data) => {
      console.log("좋아요 처리되었습니다.", data);
    },
    onError: (error) => {
      console.error(error.cause, error.message, error.name, error.stack);
      Alert.alert("오류가 발생했습니다.", "다시 시도해주세요.");
    },
  });
};
