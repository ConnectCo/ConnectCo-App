import { api } from "../apis";
import { BaseResponseDTO } from "../models";
import { OAuthDTO, ProfileListDTO } from "../models/auth";

export const removeProfile = async ({
  profileId,
  profileType,
}: {
  profileId: number;
  profileType: string;
}) => {
  const { data } = await api.post(
    `/auth/delete-profile?profileId=${profileId}&profileType=${profileType}`
  );
  return data;
};

export const getProfileList = async (): Promise<BaseResponseDTO<ProfileListDTO>> => {
  const { data } = await api.get("/auth/get-profiles");
  return data;
};

export const login = async ({
  accessToken,
  provider,
}: {
  accessToken: string;
  provider: string;
}): Promise<BaseResponseDTO<OAuthDTO>> => {
  const { data } = await api.post(`/auth/login?accessToken=${accessToken}&provider=${provider}`);
  return data;
};

export const logout = async () => {
  const { data } = await api.post("/auth/logout");
  return data;
};

export const selectProfile = async ({
  profileId,
  profileType,
}: {
  profileId: number;
  profileType: string;
  profileName: string;
  profileImageUrl: string;
}): Promise<BaseResponseDTO<OAuthDTO>> => {
  const { data } = await api.post(
    `/auth/select-profile?profileId=${profileId}&profileType=${profileType}`
  );
  return data;
};

export const withdraw = async () => {
  const { data } = await api.post("/auth/withdraw");
  return data;
};
