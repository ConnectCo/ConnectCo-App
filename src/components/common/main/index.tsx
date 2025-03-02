import { Route, router } from "expo-router";

import { FlatList, StyleSheet } from "react-native";

import Button from "@/src/components/common/button";
import Card from "@/src/components/common/card";
import Flex from "@/src/components/common/flex";
import Icon from "@/src/components/common/icon";
import Text from "@/src/components/common/text";
import { colors } from "@/src/constants/color";
import { SCREEN } from "@/src/constants/screen";
import type { CardContentProps } from "@/src/types/card";

interface MainScreenProps {
  items: CardContentProps[];
  type?: SCREEN;
  onLoadMore?: () => void;
}

function ListEmptyComponent() {
  return (
    <Flex style={styles.emptyContainer}>
      <Text size="lg" weight={600} style={{ marginBottom: 10 }}>
        데이터가 없습니다.
      </Text>
      <Text>새로운 쿠폰을 기다려주세요!</Text>
    </Flex>
  );
}

export default function MainScreen({ items, type = SCREEN.EVENT, onLoadMore }: MainScreenProps) {
  const eventScreen = type === SCREEN.EVENT ? "이벤트" : "쿠폰";

  const onRouteDetail = (id: number) => {
    router.push(`/(${type})/${id}` as Route);
  };

  const renderItem = ({ item }: { item: CardContentProps }) => (
    <Card type={type} {...item} onPress={() => onRouteDetail(item.id)} />
  );

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
            <ListEmptyComponent />
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
          <Button>
            <Flex direction="row" align="center" gap={4}>
              <Icon.Switch />
              <Text>거리순</Text>
            </Flex>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      ListHeaderComponent={ListHeader}
      ListEmptyComponent={ListEmptyComponent}
      contentContainerStyle={[styles.container, items.length === 0 && styles.flex]}
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.1}
    />
  );
}

const styles = StyleSheet.create({
  container: {
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
});
