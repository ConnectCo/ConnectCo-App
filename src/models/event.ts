import { CardContentProps } from "../types/card";

import { PaiginationDTO } from ".";

export interface EventListDTO extends PaiginationDTO {
  events: CardContentProps[];
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
