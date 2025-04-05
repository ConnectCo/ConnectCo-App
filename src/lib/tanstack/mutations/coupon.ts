import { useMutation } from "@tanstack/react-query";

import { COUPON } from "@/src/constants/coupon";
import { createCoupon } from "@/src/services/coupon";

import { invalidateQueries } from "../quries";

export const useCreateCoupon = () => {
  return useMutation({
    mutationFn: createCoupon,
    onSuccess: (data) => {
      console.log("Coupon created successfully", data);
      invalidateQueries([COUPON.MY_COUPON]);
    },
    onError: (error) => {
      console.error("Error creating coupon", error);
    },
  });
};
