import { api } from "../apis";

export const createOrganization = async (formData: FormData) => {
  const { data } = await api.post("/organizations", formData);
  return data;
};

export const removeOrganization = async (id: number) => {
  const { data } = await api.delete(`/organizations/${id}`);
  return data;
};

export const updateOrganization = async ({ id, formData }: { id: number; formData: FormData }) => {
  const { data } = await api.patch(`/organizations/${id}`, formData);
  return data;
};

export const getOrganizationById = async (id: number) => {
  const { data } = await api.get(`/organizations/${id}/detail`);
  return data;
};

export const likeOrganization = async (id: number) => {
  const { data } = await api.post(`/organizations/${id}/like`);
  return data;
};

export const getMyLikeOrganization = async (page: number) => {
  const { data } = await api.get(`/organizations/like?page=${page}&size=10`);
  return data;
};
