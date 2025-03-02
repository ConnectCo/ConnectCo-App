export interface StoreInformationDTO {
  storeId: number;
  name: string;
  description: string;
  address: {
    detailAddress: string;
    latitude: number;
    longitude: number;
  };
  phoneNumber: string;
  operatingTime: string;
  images: string[];
  coupons: [
    {
      couponId: 1;
      name: string;
      couponThumbnail: string | null;
      expiredAt: string;
    },
  ];
  appliedEventCount: number;
  isLike: boolean;
  isMine: boolean;
}
