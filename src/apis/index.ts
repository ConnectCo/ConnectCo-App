import { router } from "expo-router";

import axios from "axios";

import { getItem, removeTokens } from "../utils/store";

const baseURL = process.env.EXPO_PUBLIC_BASE_URL;

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

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = await getItem("refreshToken");

        if (!refreshToken) {
          throw new Error("리프레시 토큰이 없습니다.");
        }

        // const refreshResponse = await axios.post(`${baseURL}/refresh`, {
        //   refresh_token: refreshToken,
        // });

        // const newAccessToken = refreshResponse.data.result.accessToken;
        // const newRefreshToken = refreshResponse.data.result.refreshToken;

        // localStorage.setItem("accessToken", newAccessToken);
        // localStorage.removeItem("refreshToken");
        // localStorage.setItem("refreshToken", newRefreshToken);

        // originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        await removeTokens();
        router.back();

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
