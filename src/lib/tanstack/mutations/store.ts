import { router } from "expo-router";

import { Alert } from "react-native";

import { useMutation } from "@tanstack/react-query";

import { api } from "@/src/apis";
import { AUTH } from "@/src/constants/auth";

import { useUserStore } from "../../zustand/user";
import { invalidateQueries } from "../quries";

export const useCreateStore = () => {
  const { memberId } = useUserStore();

  return useMutation({
    mutationFn: async (formData: FormData) => {
      const { data } = await api.post("/stores", formData);
      return data;
    },
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
