import { http, HttpResponse } from "msw";

import { generateMock } from "@/src/utils/mock";

const baseUrl = process.env.EXPO_PUBLIC_BASE_URL;

export const storeHandlers = [
  http.get(`${baseUrl}/stores/1/detail`, () => {
    return HttpResponse.json(
      generateMock({
        storeId: 2,
        name: "광마카세",
        description: "안녕하세요 광마카세이빈다.",
        address: {
          detailAddress: "인하대학교 하이테크센터",
          latitude: 37.450605,
          longitude: 126.657212,
        },
        phoneNumber: "010-3708-0438",
        operatingTime: "연중 무휴 365일 운영",
        images: [require("../assets/static/store.png")],
        coupons: [
          {
            couponId: 1,
            name: "하루 이용권",
            couponThumbnail: null,
            expiredAt: "2025-03-26",
          },
        ],
        appliedEventCount: 0,
        isLike: false,
        isMine: false,
      })
    );
  }),
];
