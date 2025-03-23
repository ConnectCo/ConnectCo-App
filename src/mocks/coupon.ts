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
              name: "호말",
              title: "쿠키 무료 제공 쿠폰",
              expiredAt: "2023.10.17 ~ 2023.10.29",
              thumbnail: require("../assets/static/homeal.png"),
            },
            {
              id: 2,
              name: "호말",
              title: "전 음료 10%할인 쿠폰",
              expiredAt: "2023.10.17 ~ 2023.10.29",
              thumbnail: require("../assets/static/homeal.png"),
            },
            {
              id: 3,
              name: "호말",
              title: "샌드위치 10% 할인 쿠폰",
              expiredAt: "2023.11.01 ~ 2023.11.05",
              thumbnail: require("../assets/static/homeal.png"),
            },
            {
              id: 4,
              name: "호말",
              title: "아메리카노 무료",
              expiredAt: "2023.11.10 ~ 2023.11.12",
              thumbnail: require("../assets/static/homeal.png"),
            },
            {
              id: 5,
              name: "호말",
              title: "아메리카노 무료",
              expiredAt: "2023.11.10 ~ 2023.11.12",
              thumbnail: require("../assets/static/homeal.png"),
            },
            {
              id: 6,
              name: "호말",
              title: "아메리카노 무료",
              expiredAt: "2023.11.10 ~ 2023.11.12",
              thumbnail: require("../assets/static/homeal.png"),
            },
            {
              id: 7,
              name: "호말",
              title: "아메리카노 무료",
              expiredAt: "2023.11.10 ~ 2023.11.12",
              thumbnail: require("../assets/static/homeal.png"),
            },
            {
              id: 8,
              name: "호말",
              title: "아메리카노 무료",
              expiredAt: "2023.11.10 ~ 2023.11.12",
              thumbnail: require("../assets/static/homeal.png"),
            },
            {
              id: 9,
              name: "호말",
              title: "아메리카노 무료",
              expiredAt: "2023.11.10 ~ 2023.11.12",
              thumbnail: require("../assets/static/homeal.png"),
            },
            {
              id: 10,
              name: "호말",
              title: "아메리카노 무료",
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
            name: "호말",
            title: "쿠키 무료 제공 쿠폰",
            expiredAt: "2023.10.17 ~ 2023.10.29",
            thumbnail: require("../assets/static/homeal.png"),
          },
          {
            id: 12,
            name: "호말",
            title: "전 음료 10%할인 쿠폰",
            expiredAt: "2023.10.17 ~ 2023.10.29",
            thumbnail: require("../assets/static/homeal.png"),
          },
          {
            id: 13,
            name: "호말",
            title: "샌드위치 10% 할인 쿠폰",
            expiredAt: "2023.11.01 ~ 2023.11.05",
            thumbnail: require("../assets/static/homeal.png"),
          },
          {
            id: 14,
            name: "호말",
            title: "아메리카노 무료",
            expiredAt: "2023.11.10 ~ 2023.11.12",
            thumbnail: require("../assets/static/homeal.png"),
          },
          {
            id: 15,
            name: "호말",
            title: "아메리카노 무료",
            expiredAt: "2023.11.10 ~ 2023.11.12",
            thumbnail: require("../assets/static/homeal.png"),
          },
          {
            id: 16,
            name: "호말",
            title: "아메리카노 무료",
            expiredAt: "2023.11.10 ~ 2023.11.12",
            thumbnail: require("../assets/static/homeal.png"),
          },
          {
            id: 17,
            name: "호말",
            title: "아메리카노 무료",
            expiredAt: "2023.11.10 ~ 2023.11.12",
            thumbnail: require("../assets/static/homeal.png"),
          },
          {
            id: 18,
            name: "호말",
            title: "아메리카노 무료",
            expiredAt: "2023.11.10 ~ 2023.11.12",
            thumbnail: require("../assets/static/homeal.png"),
          },
          {
            id: 19,
            name: "호말",
            title: "아메리카노 무료",
            expiredAt: "2023.11.10 ~ 2023.11.12",
            thumbnail: require("../assets/static/homeal.png"),
          },
          {
            id: 20,
            name: "호말",
            title: "아메리카노 무료",
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
            name: "호말",
            title: "쿠키 무료 제공 쿠폰",
            expiredAt: "2023.10.17 ~ 2023.10.29",
            thumbnail: require("../assets/static/homeal.png"),
          },
          {
            id: 2,
            name: "호말",
            title: "전 음료 10%할인 쿠폰",
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
