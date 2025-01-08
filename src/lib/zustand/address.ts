import { create } from "zustand";

interface AddressStoreProps {
  event: string;
  setEvent: (event: string) => void;
  store: string;
  setStore: (store: string) => void;
}

export const useAddressStore = create<AddressStoreProps>((set) => ({
  event: "",
  setEvent: (event: string) => set({ event }),
  store: "",
  setStore: (store: string) => set({ store }),
}));
