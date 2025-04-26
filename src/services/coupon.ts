import { api } from "../apis";
import { FILTER } from "../constants/common";
import { BaseResponseDTO } from "../models";
import { CouponDetailDTO, CouponListDTO } from "../models/coupon";

export const createCoupon = async (formData: FormData) => {
  const { data } = await api.post("/coupons", formData);
  return data;
};

export const removeCoupon = async (id: number) => {
  const { data } = await api.delete(`/coupons/${id}`);
  return data;
};

export const updateCoupon = async ({ id, formData }: { id: number; formData: FormData }) => {
  const { data } = await api.patch(`/coupons/${id}`, formData);
  return data;
};

export const getCouponById = async (id: number): Promise<BaseResponseDTO<CouponDetailDTO>> => {
  const { data } = await api.get(`/coupons/${id}/detail`);
  return data;
};

export const likeCoupon = async (id: number) => {
  const { data } = await api.post(`/coupons/${id}/like`);
  return data;
};

export const getMyLikeCoupon = async (page: number) => {
  const { data } = await api.get(`/coupons/like?page=${page}&size=10`);
  return data;
};

export const getMyCoupon = async (page: number) => {
  const { data } = await api.get(`/coupons/mine?page=${page}&size=10`);
  return data;
};

export const getCouponByStore = async ({ storeId, page }: { storeId: number; page: number }) => {
  const { data } = await api.get(`/coupons/store/${storeId}?page=${page}&size=10`);
  return data;
};

export const getCouponBySearch = async ({ query, page }: { query: string; page: number }) => {
  const { data } = await api.get(`/coupons/search?query=${query}&page=${page}&size=10`);
  return data;
};

export const getCouponList = async ({
  size,
  latitude,
  longitude,
}: {
  size: number;
  latitude: number;
  longitude: number;
}): Promise<BaseResponseDTO<CouponListDTO>> => {
  const params = new URLSearchParams();
  params.append("page", "0");
  params.append("size", size.toString());
  params.append("type", FILTER.DEADLINE);
  params.append("latitude", latitude.toString());
  params.append("longitude", longitude.toString());

  const { data } = await api.get(`/coupons/list?${params.toString()}`);
  return data;
};
