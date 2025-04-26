import { Route, router } from "expo-router";

import { useRef } from "react";
import { ScrollView, StyleSheet } from "react-native";

import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

import type { CardProps } from "@/src/types/card";

import Button from "../common/button";
import Card from "../common/card";
import Flex from "../common/flex";
import Icon from "../common/icon";
import Text from "../common/text";

interface MapBottomSheetProps {
  items: CardProps[];
}

export default function MapBottomSheet({ items }: MapBottomSheetProps) {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const onRouteDetail = (type: string, id: number) => {
    router.push(`/(${type})/${id}` as Route);
  };

  return (
    <BottomSheet ref={bottomSheetRef} index={0} snapPoints={["80%"]} style={styles.container}>
      <BottomSheetView style={styles.innerContainer}>
        <Flex direction="column" style={styles.content}>
          <Flex direction="row" justify="between" align="center" style={styles.header}>
            <Text size="xxl" weight={600}>
              내 주변
            </Text>
            <Button>
              <Flex direction="row" align="center" gap={5}>
                <Icon.Switch />
                <Text>추천순</Text>
              </Flex>
            </Button>
          </Flex>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            bounces={false}
          >
            {items.length === 0 ? (
              <Text align="center">주변에 아무것도 없어요 :(</Text>
            ) : (
              items.map((item) => (
                <Card
                  key={`${item.type}-${item.id}`}
                  {...item}
                  type={item.type}
                  onPress={() => onRouteDetail(item.type!, item.id)}
                />
              ))
            )}
          </ScrollView>
        </Flex>
      </BottomSheetView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    boxShadow: "0 -3 15 0 rgba(0,0,0, 0.26)",
    borderRadius: 20,
  },
  innerContainer: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  scrollView: {
    flex: 1,
    paddingTop: 10,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 15,
  },
});
