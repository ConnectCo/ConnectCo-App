import { Route, router } from "expo-router";

import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Button from "@/src/components/common/button";
import Card from "@/src/components/common/card";
import Flex from "@/src/components/common/flex";
import Icon from "@/src/components/common/icon";
import Text from "@/src/components/common/text";
import { colors } from "@/src/constants/color";
import { FILTER } from "@/src/constants/common";
import { SCREEN } from "@/src/constants/screen";
// import { useUserStore } from "@/src/lib/zustand/user";
import type { CardContentProps } from "@/src/types/card";

interface MainScreenProps {
  items: CardContentProps[];
  filter: FILTER;
  onChangeFilter: (filter: FILTER) => void;
  type?: SCREEN;
  onLoadMore?: () => void;
}

function ListEmptyComponent({ type }: { type: SCREEN }) {
  return (
    <Flex style={styles.emptyContainer}>
      <Text size="lg" weight={600} style={{ marginBottom: 10 }}>
        데이터가 없습니다.
      </Text>
      <Text>새로운 {type === SCREEN.EVENT ? "이벤트" : "쿠폰"}을 기다려주세요!</Text>
    </Flex>
  );
}

const FILTERS = [
  { name: "거리순", value: FILTER.DISTANCE },
  { name: "만료일순", value: FILTER.DEADLINE },
  { name: "최신순", value: FILTER.RECENCY },
];

export default function MainScreen({
  items,
  filter,
  onChangeFilter,
  type = SCREEN.EVENT,
  onLoadMore,
}: MainScreenProps) {
  const eventScreen = type === SCREEN.EVENT ? "이벤트" : "쿠폰";
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const onRouteDetail = (id: number) => {
    router.push(`/(${type})/${id}` as Route);
  };

  const renderItem = ({ item }: { item: CardContentProps }) => (
    <Card type={type} {...item} onPress={() => onRouteDetail(item.id)} />
  );

  const onSelectFilter = (filter: FILTER) => {
    setIsDropdownOpen(false);
    onChangeFilter(filter);
  };

  const ListHeader = () => (
    <Flex gap={30} style={styles.headerContainer}>
      <Flex gap={20}>
        <Flex direction="row" justify="between" align="center">
          <Text size="xxl" weight={600}>
            추천 {eventScreen}
          </Text>
          <Button>
            <Icon.Reset />
          </Button>
        </Flex>
        <Flex gap={15}>
          {items.length === 0 ? (
            <ListEmptyComponent type={type} />
          ) : (
            items
              .slice(0, 2)
              .map((item) => (
                <Card
                  key={"recommend-" + item.id}
                  type={type}
                  {...item}
                  onPress={() => onRouteDetail(item.id)}
                />
              ))
          )}
        </Flex>
      </Flex>

      <Flex gap={20}>
        <Flex direction="row" justify="between" align="center">
          <Text size="xxl" weight={600}>
            {eventScreen} 목록
          </Text>
          <Button
            onPress={() => setIsDropdownOpen(!isDropdownOpen)}
            style={{ position: "relative" }}
          >
            <Flex direction="row" align="center" gap={4}>
              <Icon.Switch />
              <Text>{FILTERS.find((f) => f.value === filter)?.name}</Text>
            </Flex>
            {isDropdownOpen && (
              <Flex style={styles.dropdownContainer} gap={10}>
                {FILTERS.map((f) => (
                  <Button key={f.value} onPress={() => onSelectFilter(f.value)}>
                    <Text>{f.name}</Text>
                  </Button>
                ))}
              </Flex>
            )}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );

  // useEffect(() => {
  //   useUserStore.persist.clearStorage();
  // }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListHeaderComponent={ListHeader}
        ListHeaderComponentStyle={styles.listHeaderContainer}
        ListEmptyComponent={<ListEmptyComponent type={type} />}
        contentContainerStyle={[styles.contentContainerStyle, items.length === 0 && styles.flex]}
        onEndReached={onLoadMore}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainerStyle: {
    paddingVertical: 20,
    paddingHorizontal: 24,
    backgroundColor: colors.white,
    gap: 15,
  },
  flex: {
    flex: 1,
  },
  headerContainer: {
    marginBottom: 20,
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  listHeaderContainer: {
    zIndex: 999,
    overflow: "visible",
  },
  dropdownContainer: {
    position: "absolute",
    right: 0,
    top: 32,
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.gray200,
    zIndex: 99999,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 80,
  },
});
