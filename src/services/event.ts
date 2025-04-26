import { api } from "../apis";
import { FILTER } from "../constants/common";
import { BaseResponseDTO } from "../models";
import { EventDetailDTO, EventListDTO } from "../models/event";

export const createEvent = async (formData: FormData) => {
  const { data } = await api.post("/events", formData);
  return data;
};

export const removeEvent = async (id: number) => {
  const { data } = await api.delete(`/events/${id}`);
  return data;
};

export const updateEvent = async ({ id, formData }: { id: number; formData: FormData }) => {
  const { data } = await api.patch(`/events/${id}`, formData);
  return data;
};

export const getEventById = async (id: number): Promise<BaseResponseDTO<EventDetailDTO>> => {
  const { data } = await api.get(`/events/${id}/detail`);
  return data;
};

export const likeEvent = async (id: number) => {
  const { data } = await api.post(`/events/${id}/like`);
  return data;
};

export const getMyLikeEvent = async (page: number) => {
  const { data } = await api.get(`/events/like?page=${page}&size=10`);
  return data;
};

export const getMyEvent = async (page: number) => {
  const { data } = await api.get(`/events/mine?page=${page}&size=10`);
  return data;
};

export const getEventByOrganization = async ({
  organizationId,
  page,
}: {
  organizationId: number;
  page: number;
}) => {
  const { data } = await api.get(`/events/organization/${organizationId}?page=${page}&size=10`);
  return data;
};

export const getEventBySearch = async ({ query, page }: { query: string; page: number }) => {
  const { data } = await api.get(`/events/search?query=${query}&page=${page}&size=10`);
  return data;
};

export const getEventList = async ({
  size,
  latitude,
  longitude,
}: {
  size: number;
  latitude: number;
  longitude: number;
}): Promise<BaseResponseDTO<EventListDTO>> => {
  const params = new URLSearchParams();
  params.append("page", "0");
  params.append("size", size.toString());
  params.append("type", FILTER.DEADLINE);
  params.append("latitude", latitude.toString());
  params.append("longitude", longitude.toString());

  const { data } = await api.get(`/events/list?${params.toString()}`);
  return data;
};
