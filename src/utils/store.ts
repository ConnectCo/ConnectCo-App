import * as SecureStore from "expo-secure-store";

export async function setItem(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}

export async function getItem(key: string) {
  return (await SecureStore.getItemAsync(key)) ?? "";
}

export async function removeItem(key: string) {
  await SecureStore.deleteItemAsync(key);
}

export async function removeTokens() {
  await SecureStore.deleteItemAsync("accessToken");
  await SecureStore.deleteItemAsync("refreshToken");
}
