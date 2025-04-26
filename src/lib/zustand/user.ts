import { create } from "zustand";
import { persist, StorageValue } from "zustand/middleware";

import type { ProfileProps } from "@/src/types/user";
import { getItem, removeItem, setItem } from "@/src/utils/secure-store";

interface UserStoreProps extends ProfileProps {
  status: "anonymous" | "select-profile" | "authenticated";
  memberId: number;
  latitude: number;
  longitude: number;
  setUser: (value: Partial<UserStoreProps>) => void;
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
      status: "anonymous",
      memberId: -1,
      profileId: -1,
      profileType: null,
      profileName: "",
      profileImageUrl: "",
      latitude: 37.5662952,
      longitude: 126.9779451,
      setUser: (value) => set((state) => ({ ...state, ...value })),
    }),
    options
  )
);
