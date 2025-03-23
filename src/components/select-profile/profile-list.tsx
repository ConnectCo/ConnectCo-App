import { Image } from "expo-image";
import { router } from "expo-router";

import { ScrollView, StyleSheet, View } from "react-native";

import { colors } from "@/src/constants/color";
import { PROFILE } from "@/src/constants/user";
import { useSelectProfileMutation } from "@/src/lib/tanstack/mutations/auth";
import type { ProfileProps } from "@/src/types/user";

import Button from "../common/button";
import Flex from "../common/flex";
import Text from "../common/text";

interface ProfileListProps {
  profiles: ProfileProps[];
  type: PROFILE;
}

export default function ProfileList({ profiles, type = PROFILE.STORE }: ProfileListProps) {
  const title = type === PROFILE.STORE ? "가게" : "단체";
  const { mutateAsync, isPending } = useSelectProfileMutation();

  const onProfileSelect = async (profileId: number) => {
    await mutateAsync({ profileId, profileType: type });
  };

  const onAddProfile = () => {
    const path = type === PROFILE.STORE ? "store" : "organization";
    router.push(`/(add)/${path}`);
  };

  return (
    <Flex gap={12}>
      <Text size="lg" weight={600}>
        {title} 프로필
      </Text>
      <Flex direction="row" gap={12}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.flatList}
          contentContainerStyle={styles.contentContainerStyle}
        >
          {profiles.map((item) => (
            <Button
              key={item.profileId}
              style={styles.button}
              disabled={isPending}
              onPress={() => onProfileSelect(item.profileId as number)}
            >
              <Flex gap={4}>
                {item.profileImageUrl ? (
                  <Image source={item.profileImageUrl} style={styles.image} />
                ) : (
                  <View style={styles.imagePlaceholder} />
                )}
                <Text numberOfLines={2} align="center" size="lg" weight={600}>
                  {item.profileName}
                </Text>
              </Flex>
            </Button>
          ))}
          <Button style={[styles.button, styles.addProfile]} onPress={onAddProfile}>
            <Text size="xxl" style={styles.add}>
              +
            </Text>
          </Button>
        </ScrollView>
      </Flex>
    </Flex>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 112,
    height: 92,
    borderRadius: 8,
  },
  button: {
    padding: 4,
    borderRadius: 8,
    boxShadow: "0 0 5 0.1 rgba(0, 0, 0, 0.26)",
    elevation: 5,
    maxWidth: 120,
    alignSelf: "stretch",
  },
  flatList: {
    overflow: "visible",
  },
  contentContainerStyle: {
    gap: 12,
    alignItems: "flex-start",
  },
  addProfile: {
    padding: 50,
  },
  add: {
    color: colors.gray300,
  },
  imagePlaceholder: {
    width: 112,
    height: 92,
    borderRadius: 8,
    backgroundColor: colors.gray300,
  },
});
