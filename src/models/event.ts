import { CardContentProps } from "../types/card";

export interface EventListDTO {
  events: CardContentProps[];
  page: number;
  totalPages: number;
  totalElements: number;
  isFirst: boolean;
  isLast: boolean;
}

export interface EventDetailDTO {
  eventId: number;
  organization: {
    organizationId: number;
    name: string;
  };
  name: string;
  description: string;
  startAt: string;
  endAt: string;
  expiredAt: string;
  benefitTarget: string;
  priorityTarget: string;
  address: {
    detailAddress: string;
    latitude: number;
    longitude: number;
  };
  notification: string;
  images: string[];
  isLike: boolean;
  isMine: boolean;
  couponCount: number;
}
