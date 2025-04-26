import { useQueries } from "@tanstack/react-query";

import { COUPON } from "@/src/constants/coupon";
import { EVENT } from "@/src/constants/event";
import { BaseResponseDTO } from "@/src/models";
import { CouponListDTO } from "@/src/models/coupon";
import { EventListDTO } from "@/src/models/event";
import { getCouponList } from "@/src/services/coupon";
import { getEventList } from "@/src/services/event";

export const useGetEventCouponList = ({
  size,
  latitude,
  longitude,
}: {
  size: number;
  latitude: number;
  longitude: number;
}) => {
  return useQueries({
    queries: [
      {
        queryKey: [EVENT.LIST, size, latitude, longitude],
        queryFn: async () => await getEventList({ size, latitude, longitude }),
        select: (data: BaseResponseDTO<EventListDTO>) => data.result.events,
      },
      {
        queryKey: [COUPON.LIST, size, latitude, longitude],
        queryFn: async () => await getCouponList({ size, latitude, longitude }),
        select: (data: BaseResponseDTO<CouponListDTO>) => data.result.coupons,
      },
    ],
  });
};
