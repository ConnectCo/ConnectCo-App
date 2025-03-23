import * as Location from "expo-location";
import { router } from "expo-router";

import { SafeAreaView, StyleSheet } from "react-native";

import PostCode from "@actbase/react-daum-postcode";
import { OnCompleteParams } from "@actbase/react-daum-postcode/lib/types";

import { useAddressStore } from "../lib/zustand/address";

export default function AddressScreen() {
  const setAddress = useAddressStore((state) => state.setAddress);

  const onSelected = async (data: OnCompleteParams) => {
    const location = await Location.geocodeAsync(data.address);

    const { latitude, longitude } = location[0];
    setAddress({ address: data.address, latitude, longitude });

    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <PostCode
        style={styles.container}
        jsOptions={{ animation: true }}
        onSelected={onSelected}
        onError={(error) => alert(JSON.stringify(error))}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
