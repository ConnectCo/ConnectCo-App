import { Image } from "expo-image";
import { router } from "expo-router";

import { Dimensions, StyleSheet, View } from "react-native";

import { colors } from "@/src/constants/color";

import Button from "../common/button";
import Text from "../common/text";

interface ChatItemProps {
  id: number;
  profile: string;
  name: string;
  time: string;
  message: string;
  unread: number;
}

const width = Dimensions.get("window").width;

export default function ChatItem({ id, profile, name, time, message, unread }: ChatItemProps) {
  const onNavToChat = () => {
    router.push({ pathname: "/chat/[id]", params: { id, name } });
  };

  return (
    <Button onPress={onNavToChat} style={[styles.container, styles.row]}>
      <View style={[styles.row, styles.profile]}>
        <Image source={profile} alt="유저 프로필" style={styles.image} contentFit="cover" />
        <View style={styles.profileBox}>
          <View style={[styles.row, styles.profileNameTime]}>
            <Text size="lg" weight={600}>
              {name}
            </Text>
            <Text size="sm" style={{ color: colors.gray500 }}>
              {time}
            </Text>
          </View>
          <Text numberOfLines={1} weight={500}>
            {message}
          </Text>
        </View>
      </View>
      {unread > 0 && (
        <View style={styles.unreadCount}>
          <Text style={styles.unreadCountText}>{unread}</Text>
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
