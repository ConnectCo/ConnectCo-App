import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";

import { SafeAreaView, StyleSheet } from "react-native";

import PostCode from "@actbase/react-daum-postcode";
import { OnCompleteParams } from "@actbase/react-daum-postcode/lib/types";

import { useAddressStore } from "../lib/zustand/address";

export default function AddressScreen() {
  const params = useLocalSearchParams();
  const store = useAddressStore();

  const setState = params.type === "event" ? store.setEvent : store.setStore;

  const onSelected = (data: OnCompleteParams) => {
    setState(data.address);
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
