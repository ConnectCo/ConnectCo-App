import { Alert } from "react-native";

import { useMutation } from "@tanstack/react-query";

import { api } from "@/src/apis";
import { COUPON } from "@/src/constants/coupon";
import { EVENT } from "@/src/constants/event";
import { SCREEN } from "@/src/constants/screen";

import { invalidateQueries, queryClient } from "../quries";

export const useLike = (type: SCREEN) => {
  const prefix = type === SCREEN.EVENT ? "events" : "coupons";
  const queryKey = type === SCREEN.EVENT ? EVENT.DETAIL : COUPON.DETAIL;

  return useMutation({
    mutationFn: async (id: string) => {
      const { data } = await api.post(`/${prefix}/${id}/like`);
      return data;
    },
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: [queryKey, +id] });
      const previousData = queryClient.getQueryData([queryKey, +id]);
      queryClient.setQueryData([queryKey, +id], (old: any) => {
        if (!old) return null;
        return { ...old, liked: !old.liked };
      });
      return { previousData };
    },
    onError: (error, id, context) => {
      Alert.alert("찜하기 실패");
      queryClient.setQueryData([queryKey, +id], context?.previousData);
    },
    onSettled: (data, error, id) => {
      invalidateQueries([queryKey, +id]);
    },
  });
};
