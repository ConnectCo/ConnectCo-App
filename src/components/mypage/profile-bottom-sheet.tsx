import { Image } from "expo-image";

import { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, Pressable, StyleSheet, View } from "react-native";

import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

import { colors } from "@/src/constants/color";
import { useSelectProfileMutation } from "@/src/lib/tanstack/mutations/auth";
import { useGetProfileList } from "@/src/lib/tanstack/quries/auth";
import { ProfileProps } from "@/src/types/user";

import Button from "../common/button";
import TextButton from "../common/button/text-button";
import Flex from "../common/flex";
import Text from "../common/text";

const { height } = Dimensions.get("window");

interface ProfileBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileBottomSheet({ isOpen, onClose }: ProfileBottomSheetProps) {
  const [isOrganization, setIsOrganization] = useState(true);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const { data } = useGetProfileList();
  const { mutateAsync, isPending, isSuccess } = useSelectProfileMutation();

  const onProfileSelect = async (profile: ProfileProps) => {
    await mutateAsync({
      profileId: profile.profileId as number,
      profileType: profile.profileType as string,
      profileName: profile.profileName as string,
      profileImageUrl: profile.profileImageUrl,
    });
  };

  const profileList = isOrganization
    ? data?.result?.organizationProfiles
    : data?.result?.storeProfiles;

  useEffect(() => {
    if (isOpen) {
      bottomSheetRef.current?.snapToIndex(0);
    } else {
      bottomSheetRef.current?.close();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isPending && isSuccess) {
      onClose();
    }
  }, [isPending, isSuccess]);

  return (
    <View style={StyleSheet.absoluteFill}>
      {isOpen && <Pressable style={styles.overlay} onPress={onClose} />}

      <BottomSheet ref={bottomSheetRef} index={0} snapPoints={["80%"]} style={styles.container}>
        <BottomSheetView style={styles.innerContainer}>
          <Flex direction="row" justify="between" style={styles.flex} gap={10}>
            <TextButton
              onPress={() => setIsOrganization(true)}
              type={isOrganization ? "fill" : "outline"}
              style={styles.button}
            >
              단체
            </TextButton>
            <TextButton
              onPress={() => setIsOrganization(false)}
              type={!isOrganization ? "fill" : "outline"}
              style={styles.button}
            >
              가게
            </TextButton>
          </Flex>
          <FlatList
            data={profileList}
            keyExtractor={(item, idx) => item?.profileId?.toString() || idx.toString()}
            renderItem={({ item }) => (
              <Button
                onPress={() => {
                  onProfileSelect(item);
                }}
                style={styles.selectButton}
              >
                <Flex direction="row" align="center" gap={10}>
                  {item.profileImageUrl ? (
                    <Image source={item.profileImageUrl} style={styles.image} />
                  ) : (
                    <View style={[styles.imagePlaceholder, styles.image]} />
                  )}
                  <Text numberOfLines={2} align="center" size="lg" weight={600}>
                    {item.profileName}
                  </Text>
                </Flex>
              </Button>
            )}
          />
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },
  container: {
    borderRadius: 20,
    overflow: "hidden",
    boxShadow: "0 -3 15 0 rgba(0,0,0, 0.26)",
  },
  innerContainer: {
    flex: 1,
    height: height * 0.2,
  },
  flex: {
    padding: 10,
  },
  button: {
    flex: 1,
  },
  selectButton: {
    padding: 10,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 8,
    objectFit: "cover",
  },
  imagePlaceholder: {
    backgroundColor: colors.gray300,
  },
});
