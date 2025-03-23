import { Alert } from "react-native";

import axios from "axios";

import { useUserStore } from "../lib/zustand/user";
import { getItem, removeTokens, setItem } from "../utils/secure-store";

const baseURL = process.env.EXPO_PUBLIC_BASE_URL;
const userStore = useUserStore.getState();

export const api = axios.create({
  baseURL,
});

api.interceptors.request.use(async (config) => {
  const accessToken = await getItem("accessToken");

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 403 && !originalRequest._retry) {
      if (userStore.status === "select-profile") {
        await removeTokens();
        userStore.setUser({
          profileType: null,
          status: "anonymous",
          profileId: -1,
          profileName: "",
        });

        Alert.alert("처음부터 다시 로그인 해주세요.");
        return api(originalRequest);
      }
      originalRequest._retry = true;

      try {
        const refreshToken = await getItem("refreshToken");

        if (!refreshToken) {
          throw new Error("리프레시 토큰이 없습니다.");
        }

        const refreshResponse = await axios.post(`${baseURL}/auth/refresh`, undefined, {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        });

        const newAccessToken = refreshResponse.data.result.accessToken;
        const newRefreshToken = refreshResponse.data.result.refreshToken;

        await setItem("accessToken", newAccessToken);
        await setItem("refreshToken", newRefreshToken);

        userStore.setUser({
          memberId: refreshResponse.data.result.memberId,
          profileId: refreshResponse.data.result.profile.profileId,
          profileType: refreshResponse.data.result.profile.profileType,
        });

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return api(originalRequest);
      } catch (refreshError) {
        await removeTokens();
        userStore.setUser({
          status: "anonymous",
          profileId: -1,
          profileType: null,
          profileName: "",
        });

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
