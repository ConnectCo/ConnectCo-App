import { CardContentProps } from "../types/card";

export interface CouponListDTO {
  coupons: CardContentProps[];
  page: number;
  totalPages: number;
  totalElements: number;
  isFirst: boolean;
  isLast: boolean;
}
