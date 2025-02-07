import { Image } from "expo-image";
import { router } from "expo-router";

import { Dimensions, StyleSheet, View } from "react-native";

import { colors } from "@/src/constants/color";
import { ChatListDTO } from "@/src/models/chat";
import { formatDateTime } from "@/src/utils/date";

import Button from "../common/button";
import Text from "../common/text";

const width = Dimensions.get("window").width;

export default function ChatItem({
  chatRoomId,
  otherMemberName,
  recentMessage,
  recentMessageTime,
  profileImage,
  unreadCount,
}: ChatListDTO) {
  const onNavToChat = () => {
    router.push({ pathname: "/chat/[chatRoomId]", params: { chatRoomId, otherMemberName } });
  };

  return (
    <Button onPress={onNavToChat} style={[styles.container, styles.row]}>
      <View style={[styles.row, styles.profile]}>
        <Image source={profileImage} alt="유저 프로필" style={styles.image} contentFit="cover" />
        <View style={styles.profileBox}>
          <View style={[styles.row, styles.profileNameTime]}>
            <Text size="lg" weight={600}>
              {otherMemberName}
            </Text>
            <Text size="sm" style={{ color: colors.gray500 }}>
              {formatDateTime(recentMessageTime)}
            </Text>
          </View>
          <Text numberOfLines={1} weight={500}>
            {recentMessage}
          </Text>
        </View>
      </View>
      {unreadCount > 0 && (
        <View style={styles.unreadCount}>
          <Text style={styles.unreadCountText}>{unreadCount}</Text>
        </View>
      )}
    </Button>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderBlockColor: colors.gray300,
    borderBottomWidth: 1,
    alignItems: "center",
    gap: 10,
  },
  profile: {
    overflow: "hidden",
    flex: 1,
    gap: 16,
    alignItems: "center",
  },
  profileBox: {
    width: width - 154,
    gap: 8,
  },
  profileNameTime: {
    gap: 10,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: "50%",
  },
  unreadCount: {
    width: 25,
    height: 25,
    borderRadius: "50%",
    backgroundColor: colors.primary300,
    justifyContent: "center",
    alignItems: "center",
  },
  unreadCountText: {
    color: colors.white,
  },
});
