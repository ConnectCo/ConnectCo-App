import { http, HttpResponse } from "msw";

import { generateMock } from "@/src/utils/mock";

const baseUrl = process.env.EXPO_PUBLIC_BASE_URL;

export const couponHandlers = [
  http.get(`${baseUrl}/coupons/deadline`, ({ request }) => {
    const url = new URL(request.url);

    const page = url.searchParams.get("page");

    if (page === "0") {
      return HttpResponse.json(
        generateMock({
          coupons: [
            {
              id: 1,
              host: "호말",
              name: "쿠키 무료 제공 쿠폰",
              expiredAt: "2023.10.17 ~ 2023.10.29",
              thumbnail: require("../assets/static/homeal.png"),
            },
            {
              id: 2,
              host: "호말",
              name: "전 음료 10%할인 쿠폰",
              expiredAt: "2023.10.17 ~ 2023.10.29",
              thumbnail: require("../assets/static/homeal.png"),
            },
            {
              id: 3,
              host: "호말",
              name: "샌드위치 10% 할인 쿠폰",
              expiredAt: "2023.11.01 ~ 2023.11.05",
              thumbnail: require("../assets/static/homeal.png"),
            },
            {
              id: 4,
              host: "호말",
              name: "아메리카노 무료",
              expiredAt: "2023.11.10 ~ 2023.11.12",
              thumbnail: require("../assets/static/homeal.png"),
            },
            {
              id: 5,
              host: "호말",
              name: "아메리카노 무료",
              expiredAt: "2023.11.10 ~ 2023.11.12",
              thumbnail: require("../assets/static/homeal.png"),
            },
            {
              id: 6,
              host: "호말",
              name: "아메리카노 무료",
              expiredAt: "2023.11.10 ~ 2023.11.12",
              thumbnail: require("../assets/static/homeal.png"),
            },
            {
              id: 7,
              host: "호말",
              name: "아메리카노 무료",
              expiredAt: "2023.11.10 ~ 2023.11.12",
              thumbnail: require("../assets/static/homeal.png"),
            },
            {
              id: 8,
              host: "호말",
              name: "아메리카노 무료",
              expiredAt: "2023.11.10 ~ 2023.11.12",
              thumbnail: require("../assets/static/homeal.png"),
            },
            {
              id: 9,
              host: "호말",
              name: "아메리카노 무료",
              expiredAt: "2023.11.10 ~ 2023.11.12",
              thumbnail: require("../assets/static/homeal.png"),
            },
            {
              id: 10,
              host: "호말",
              name: "아메리카노 무료",
              expiredAt: "2023.11.10 ~ 2023.11.12",
              thumbnail: require("../assets/static/homeal.png"),
            },
          ],
          page: 0,
          totalPages: 10,
          totalElements: 100,
          isFirst: true,
          isLast: false,
        })
      );
    }

    return HttpResponse.json(
      generateMock({
        coupons: [
          {
            id: 11,
            host: "호말",
            name: "쿠키 무료 제공 쿠폰",
            expiredAt: "2023.10.17 ~ 2023.10.29",
            thumbnail: require("../assets/static/homeal.png"),
          },
          {
            id: 12,
            host: "호말",
            name: "전 음료 10%할인 쿠폰",
            expiredAt: "2023.10.17 ~ 2023.10.29",
            thumbnail: require("../assets/static/homeal.png"),
          },
          {
            id: 13,
            host: "호말",
            name: "샌드위치 10% 할인 쿠폰",
            expiredAt: "2023.11.01 ~ 2023.11.05",
            thumbnail: require("../assets/static/homeal.png"),
          },
          {
            id: 14,
            host: "호말",
            name: "아메리카노 무료",
            expiredAt: "2023.11.10 ~ 2023.11.12",
            thumbnail: require("../assets/static/homeal.png"),
          },
          {
            id: 15,
            host: "호말",
            name: "아메리카노 무료",
            expiredAt: "2023.11.10 ~ 2023.11.12",
            thumbnail: require("../assets/static/homeal.png"),
          },
          {
            id: 16,
            host: "호말",
            name: "아메리카노 무료",
            expiredAt: "2023.11.10 ~ 2023.11.12",
            thumbnail: require("../assets/static/homeal.png"),
          },
          {
            id: 17,
            host: "호말",
            name: "아메리카노 무료",
            expiredAt: "2023.11.10 ~ 2023.11.12",
            thumbnail: require("../assets/static/homeal.png"),
          },
          {
            id: 18,
            host: "호말",
            name: "아메리카노 무료",
            expiredAt: "2023.11.10 ~ 2023.11.12",
            thumbnail: require("../assets/static/homeal.png"),
          },
          {
            id: 19,
            host: "호말",
            name: "아메리카노 무료",
            expiredAt: "2023.11.10 ~ 2023.11.12",
            thumbnail: require("../assets/static/homeal.png"),
          },
          {
            id: 20,
            host: "호말",
            name: "아메리카노 무료",
            expiredAt: "2023.11.10 ~ 2023.11.12",
            thumbnail: require("../assets/static/homeal.png"),
          },
        ],
        page: 1,
        totalPages: 10,
        totalElements: 100,
        isFirst: false,
        isLast: true,
      })
    );
  }),
  http.get(`${baseUrl}/coupons/1/detail`, () => {
    return HttpResponse.json(
      generateMock({
        id: 1,
        store: {
          storeId: 2,
          name: "광마카세",
        },
        name: "하루 이용권",
        description: "하루 무료 이용권",
        priorityTarget: "커넥코 구성원",
        notification: "유의사항입니다.",
        expiredAt: "2025-03-26",
        createdAt: "2025-03-02",
        images: [require("../assets/static/coupon.png")],
        isLike: false,
        isMine: false,
      })
    );
  }),
  http.get(`${baseUrl}/coupons/store/1`, () => {
    return HttpResponse.json(
      generateMock({
        coupons: [
          {
            id: 1,
            host: "호말",
            name: "쿠키 무료 제공 쿠폰",
            expiredAt: "2023.10.17 ~ 2023.10.29",
            thumbnail: require("../assets/static/homeal.png"),
          },
          {
            id: 2,
            host: "호말",
            name: "전 음료 10%할인 쿠폰",
            expiredAt: "2023.10.17 ~ 2023.10.29",
            thumbnail: require("../assets/static/homeal.png"),
          },
        ],
        page: 0,
        totalPages: 1,
        totalElements: 2,
        isFirst: true,
        isLast: true,
      })
    );
  }),
];
