import { CardContentProps } from "../types/card";

export interface CouponListDTO {
  coupons: CardContentProps[];
  page: number;
  totalPages: number;
  totalElements: number;
  isFirst: boolean;
  isLast: boolean;
}

export interface CouponDetailDTO {
  id: number;
  store: {
    storeId: number;
    name: string;
  };
  name: string;
  description: string;
  priorityTarget: string;
  notification: string;
  expiredAt: string;
  createdAt: string;
  images: string[];
  isLike: boolean;
  isMine: boolean;
  eventCount: number;
}
