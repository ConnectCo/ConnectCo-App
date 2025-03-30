import { api } from "@/src/apis";

import { BaseResponseDTO } from "../models";
import { StoreInformationDTO, StoreListDTO } from "../models/store";

export const createStore = async (formData: FormData) => {
  const { data } = await api.post("/stores", formData);
  return data;
};

export const removeStore = async (id: number) => {
  const { data } = await api.delete(`/stores/${id}`);
  return data;
};

export const updateStore = async ({ id, formData }: { id: number; formData: FormData }) => {
  const { data } = await api.patch(`/stores/${id}`, formData);
  return data;
};

export const getStoreById = async (id: number): Promise<BaseResponseDTO<StoreInformationDTO>> => {
  const { data } = await api.get(`/stores/${id}/detail`);
  return data;
};

export const likeStore = async (id: number) => {
  const { data } = await api.post(`/stores/${id}/like`);
  return data;
};

export const getMyLikeStore = async (page: number): Promise<BaseResponseDTO<StoreListDTO>> => {
  const { data } = await api.get(`/stores/like?page=${page}&size=10`);
  return data;
};
