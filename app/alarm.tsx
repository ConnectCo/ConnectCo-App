import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import AlarmItem from "@/components/alarm/alarm-item";
import Container from "@/components/common/container";
import { colors } from "@/constants/color";

const alarms = [
  {
    id: 1,
    isRead: true,
    content: '"단체"에서 "협찬권 A"를 신청했어요!',
  },
  {
    id: 2,
    isRead: false,
    content: '"단체"에서 "협찬권 B"를 신청했어요!',
  },
  {
    id: 3,
    isRead: true,
    content: '"단체"에서 "협찬권 C"를 신청했어요!',
  },
  {
    id: 4,
    isRead: false,
    content: '"단체"에서 "협찬권 D"를 신청했어요!',
  },
  {
    id: 5,
    isRead: true,
    content: '"단체"에서 "협찬권 E"를 신청했어요!',
  },
  {
    id: 6,
    isRead: false,
    content: '"단체"에서 "협찬권 F"를 신청했어요!',
  },
];

export default function AlarmScreen() {
  return (
    <Container as="View">
      <FlatList
        data={alarms}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => <AlarmItem {...item} />}
        contentContainerStyle={styles.container}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
    backgroundColor: colors.white,
    height: "100%",
  },
});
