import { CardContentProps } from "../types/card";

import { PaiginationDTO } from ".";

export interface CouponListDTO extends PaiginationDTO {
  coupons: CardContentProps[];
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
