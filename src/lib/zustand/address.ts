import { create } from "zustand";

interface AddressStoreProps {
  address: string;
  setAddress: (address: string) => void;
}

export const useAddressStore = create<AddressStoreProps>((set) => ({
  address: "",
  setAddress: (address: string) => set({ address }),
}));
