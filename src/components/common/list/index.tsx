import { router } from "expo-router";

import { FlatList, StyleSheet, View } from "react-native";

import { FILTER } from "@/src/constants/common";
import { SCREEN } from "@/src/constants/screen";
import { useGetList } from "@/src/lib/tanstack/quries/common";
import { CardContentProps } from "@/src/types/card";

import Empty from "./empty";
import Card from "../card";

interface ListProps {
  type: SCREEN;
  filter: FILTER;
}

export default function List({ type, filter }: ListProps) {
  const { data, hasNextPage, fetchNextPage } = useGetList({
    type,
    filter,
  });

  const onRouteDetail = (id: number) => {
    router.push(`/(${type})/${id}`);
  };

  const handleLoadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <View style={styles.container}>
      {data.result.length === 0 ? (
        <Empty type={type} />
      ) : (
        <FlatList
          data={data.result}
          renderItem={({ item }) => {
            const cardItem = item as CardContentProps;
            return <Card type={type} {...cardItem} onPress={() => onRouteDetail(cardItem.id)} />;
          }}
          keyExtractor={(item) => (item as CardContentProps).id.toString()}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          style={styles.flatList}
          bounces={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    overflow: "visible",
  },
});
