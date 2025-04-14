import { Image } from "expo-image";
import { Route, useRouter } from "expo-router";

import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Button from "@/src/components/common/button";
import ChipButton from "@/src/components/common/button/chip-button";
import TextButton from "@/src/components/common/button/text-button";
import Container from "@/src/components/common/container";
import Flex from "@/src/components/common/flex";
import Icon from "@/src/components/common/icon";
import Text from "@/src/components/common/text";
import MyItems from "@/src/components/mypage/my-items";
import ProfileBottomSheet from "@/src/components/mypage/profile-bottom-sheet";
import { colors } from "@/src/constants/color";
import { SCREEN } from "@/src/constants/screen";
import { PROFILE } from "@/src/constants/user";
import { useLogoutMutation } from "@/src/lib/tanstack/mutations/auth";
import { useGetMyItem, useGetMyLike } from "@/src/lib/tanstack/quries/common";
import { useUserStore } from "@/src/lib/zustand/user";
import { CardContentProps } from "@/src/types/card";

export default function MypageScreen() {
  const [isProfileBottomSheetOpen, setIsProfileBottomSheetOpen] = useState(false);

  const router = useRouter();
  const userStore = useUserStore();

  const { data: myItemData } = useGetMyItem(userStore.profileType as PROFILE);
  // const { data: myLikeData } = useGetMyLike(userStore.profileType as PROFILE);

  const { mutateAsync } = useLogoutMutation();

  const type = userStore.profileType === PROFILE.ORGANIZATION ? SCREEN.EVENT : SCREEN.COUPON;

  const onRouteAdd = (path: Route) => {
    router.push(path);
  };

  const onRouteFavorite = () => {
    router.push("/(tabs)/(mypage)/favorite");
  };

  const onRouteHistory = () => {
    router.push("/(tabs)/(mypage)/history");
  };

  const onLogout = async () => {
    await mutateAsync();
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <Container as="View" style={styles.contentGap}>
          <Flex direction="row" align="center" justify="between">
            <Button onPress={() => setIsProfileBottomSheetOpen(true)}>
              <Flex direction="row" align="center" gap={5}>
                <Image
                  source={require("../../../assets/static/profile.png")}
                  style={{ width: 40, height: 40 }}
                />
                <Text size="xl" weight={700}>
                  {userStore.profileName}
                </Text>
              </Flex>
            </Button>
            <ChipButton onPress={() => {}}>
              <Text>프로필 편집</Text>
            </ChipButton>
          </Flex>
          <Flex direction="row" justify="between" gap={10}>
            <Button style={styles.button} onPress={onRouteHistory}>
              <Flex direction="row" align="center" justify="between">
                <Text size="lg" weight={600} style={styles.buttonText}>
                  활동 내역
                </Text>
                <Icon.ArrowRight />
              </Flex>
            </Button>
            <Button style={styles.button} onPress={onRouteFavorite}>
              <Flex direction="row" align="center" justify="between">
                <Text size="lg" weight={600} style={styles.buttonText}>
                  찜한 목록
                </Text>
                <Icon.ArrowRight />
              </Flex>
            </Button>
          </Flex>
        </Container>
        <View style={styles.divider} />
        <View style={styles.divider} />
        <MyItems
          items={myItemData.result as CardContentProps[]}
          type={type}
          onPressAdd={() => onRouteAdd("/(coupon)/add")}
        />
        <TextButton onPress={onLogout}>로그아웃</TextButton>
      </ScrollView>
      {isProfileBottomSheetOpen && (
        <ProfileBottomSheet
          isOpen={isProfileBottomSheetOpen}
          onClose={() => setIsProfileBottomSheetOpen(false)}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentGap: {
    gap: 20,
  },
  button: {
    flex: 1,
    padding: 10,
    boxShadow: "0 0 4 0 rgba(0, 0, 0, 0.26)",
    borderRadius: 10,
  },
  buttonText: {
    color: colors.primary300,
  },
  divider: {
    height: 5,
    width: "100%",
    backgroundColor: colors.gray200,
  },
});
