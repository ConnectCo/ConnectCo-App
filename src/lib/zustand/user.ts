import { create } from "zustand";
import { persist, StorageValue } from "zustand/middleware";

import type { ProfileProps } from "@/src/types/user";
import { getItem, removeItem, setItem } from "@/src/utils/secure-store";

interface UserStoreProps extends ProfileProps {
  status: "annonymous" | "select-profile" | "authenticated";
  accessToken: string;
  refreshToken: string;
  setUser: (key: keyof UserStoreProps, value: UserStoreProps) => void;
}

const options = {
  name: "user-storage",
  storage: {
    getItem: async (key: string) => {
      const value = await getItem(key);
      return value ? JSON.parse(value) : null;
    },
    setItem: async (key: string, value: StorageValue<UserStoreProps>) => {
      await setItem(key, JSON.stringify(value));
    },
    removeItem: async (key: string) => {
      await removeItem(key);
    },
  },
};

export const useUserStore = create(
  persist<UserStoreProps>(
    (set) => ({
      status: "select-profile",
      profileId: -1,
      profileType: "",
      profileName: "",
      profileImageUrl: "",
      accessToken: "",
      refreshToken: "",
      setUser: (key, value) => set((state) => ({ ...state, [key]: value })),
    }),
    options
  )
);
