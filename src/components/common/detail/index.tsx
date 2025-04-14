import { Alert, ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors } from "@/src/constants/color";
import { SCREEN } from "@/src/constants/screen";
import { PROFILE } from "@/src/constants/user";
import { useCreateChatRoom, useEnterChatRoom } from "@/src/lib/tanstack/mutations/chat";
import { useLike } from "@/src/lib/tanstack/mutations/common";
import { useUserStore } from "@/src/lib/zustand/user";

import Button from "../button";
import TextButton from "../button/text-button";
import Container from "../container";
import Flex from "../flex";
import Icon from "../icon";
import ImageScroll from "../image-scroll";
import Text from "../text";

interface CommonDetailProps {
  id: string;
  profile?: {
    name: string;
    id: number;
  };
  images: string[];
  name: string;
  description: string;
  expiredAt?: string;
  children: React.ReactNode;
  isLike: boolean;
  isMine: boolean;
  appliedCount: number;
  type?: SCREEN;
  onRouteProfile?: () => void;
  onPressRight: () => void;
}

export default function CommonDetail({
  id,
  profile,
  images,
  name,
  expiredAt,
  description,
  isLike,
  isMine,
  appliedCount,
  children,
  type = SCREEN.EVENT,
  onRouteProfile,
  onPressRight,
}: CommonDetailProps) {
  const userStore = useUserStore((state) => state);
  const { bottom } = useSafeAreaInsets();

  const { mutateAsync } = useLike(type);
  const { mutateAsync: enterChatRoomMutate } = useEnterChatRoom();
  const { mutateAsync: createChatRoomMutate } = useCreateChatRoom();

  const isAuthenticated = userStore.status === "authenticated";

  const isStore = type === SCREEN.STORE;
  const isOrganization = type === SCREEN.EVENT;

  const leftButton = isMine ? "수정하기" : "1:1 채팅";
  const rightButton = isStore
    ? isMine
      ? "신청 이벤트"
      : "전화걸기"
    : isMine
      ? `신청 ${type === SCREEN.EVENT ? "쿠폰" : "이벤트"}`
      : `협찬 ${type === SCREEN.EVENT ? "제안" : "신청"}`;

  const isOrganizationMode =
    userStore.profileType === PROFILE.ORGANIZATION && type === SCREEN.EVENT && !isMine;
  const isStoreMode = userStore.profileType === PROFILE.STORE && type === SCREEN.COUPON && !isMine;

  const onPressLeft = () => {
    if (!isAuthenticated) {
      return Alert.alert("로그인 후 이용해주세요.");
    }
    if (isMine) {
      // 수정하기 라우팅
    } else {
      createChatRoomMutate({
        senderId: userStore.profileId as number,
        receiverId: profile?.id || 0,
        senderProfileType: userStore.profileType as PROFILE,
        receiverProfileType: isOrganization ? PROFILE.ORGANIZATION : PROFILE.STORE,
      });
      // 채팅방 입장 API
      // enterChatRoomMutate({
      //   otherProfileId: profile?.id || 0,
      //   otherProfileType: isOrganization ? PROFILE.ORGANIZATION : PROFILE.STORE,
      // });
      // 채팅 방 ID가 없다면 채팅방 생성하는 API 요청
    }
  };

  const onPressFavorite = () => {
    if (isStoreMode) {
      return Alert.alert("가게 프로필에서 가게는 찜을 할 수 없습니다.");
    }
    if (isOrganizationMode) {
      return Alert.alert("단체 프로필에서 단체는 찜을 할 수 없습니다.");
    }
    if (!isAuthenticated) {
      return Alert.alert("로그인 후 이용해주세요.");
    }
    mutateAsync(id);
  };

  return (
    <ScrollView style={styles.container}>
      {images.length > 0 ? (
        <ImageScroll images={images} />
      ) : (
        <View style={styles.imagePlaceholder} />
      )}
      {!isStore && (
        <Button onPress={onRouteProfile}>
          <Flex direction="row" align="center" justify="between" style={styles.wrap}>
            <Text weight={600} style={styles.profile}>
              {profile?.name}
            </Text>
            <Icon.ArrowRight fill={colors.gray500} />
          </Flex>
        </Button>
      )}
      <Container as="View" style={{ paddingBottom: bottom }}>
        <Flex gap={10}>
          <Flex direction="row" justify="between" align="center">
            <Text size="xxl" weight={600}>
              {name}
            </Text>
            <Button onPress={onPressFavorite}>
              <Icon.Favorite selected={isLike} />
            </Button>
          </Flex>
          {expiredAt && (
            <Text weight={600} style={styles.expiredAt}>
              신청마감일 : {expiredAt}
            </Text>
          )}
          <Text>{description}</Text>
        </Flex>
        <View style={styles.divider} />
        <Flex gap={50}>
          <Flex gap={25}>{children}</Flex>
          {isAuthenticated && (
            <Flex direction="row" gap={12}>
              <TextButton onPress={onPressLeft} style={styles.button} type="outline">
                {leftButton}
              </TextButton>
              {isOrganizationMode || isStoreMode ? null : (
                <View style={{ flex: 1 }}>
                  <TextButton onPress={onPressRight} style={styles.button}>
                    {rightButton}
                  </TextButton>
                  {appliedCount ? (
                    <Flex justify="center" align="center" style={styles.appliedCountWrap}>
                      <Text size="sm" weight={600} style={styles.appliedCount}>
                        {appliedCount}
                      </Text>
                    </Flex>
                  ) : null}
                </View>
              )}
            </Flex>
          )}
        </Flex>
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  wrap: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: colors.gray100,
  },
  profile: {
    color: colors.gray500,
  },
  expiredAt: {
    color: colors.gray500,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: colors.gray300,
    marginVertical: 20,
  },
  button: {
    flex: 1,
  },
  appliedCountWrap: {
    position: "absolute",
    right: -14,
    top: -14,
    borderWidth: 1,
    borderColor: colors.primary300,
    backgroundColor: colors.gray100,
    borderRadius: 14,
    width: 28,
    height: 28,
  },
  appliedCount: {
    color: colors.primary300,
  },
  imagePlaceholder: {
    width: "100%",
    height: 200,
    backgroundColor: colors.gray300,
  },
});
