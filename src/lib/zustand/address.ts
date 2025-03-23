import { create } from "zustand";

interface Address {
  address: string;
  latitude: number;
  longitude: number;
}

interface AddressStoreProps extends Address {
  setAddress: (address: Address) => void;
}

export const useAddressStore = create<AddressStoreProps>((set) => ({
  address: "",
  latitude: 0,
  longitude: 0,
  setAddress: (address: Address) => set(address),
}));
