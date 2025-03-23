import type { ErrorBoundaryProps } from "expo-router";

import { Suspense, useState } from "react";
import { StyleSheet } from "react-native";

import Button from "@/src/components/common/button";
import Container from "@/src/components/common/container";
import Error from "@/src/components/common/error";
import Flex from "@/src/components/common/flex";
import Icon from "@/src/components/common/icon";
import List from "@/src/components/common/list";
import Empty from "@/src/components/common/list/empty";
import Loading from "@/src/components/common/loading";
import Text from "@/src/components/common/text";
import { colors } from "@/src/constants/color";
import { FILTER } from "@/src/constants/common";
import { SCREEN } from "@/src/constants/screen";

const FILTERS = [
  { name: "만료일순", value: FILTER.DEADLINE },
  { name: "거리순", value: FILTER.DISTANCE },
  { name: "최신순", value: FILTER.RECENCY },
];

export function ErrorBoundary(props: ErrorBoundaryProps) {
  return <Error {...props} />;
}

export default function Event() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filter, setFilter] = useState<FILTER>(FILTER.DEADLINE);

  const onSelectFilter = (filter: FILTER) => {
    setFilter(filter);
    setIsDropdownOpen(false);
  };

  return (
    <Container as="View" style={styles.flex}>
      <Flex gap={20}>
        <Flex direction="row" justify="between" align="center">
          <Text size="xxl" weight={600}>
            추천 이벤트
          </Text>
          <Button>
            <Icon.Reset />
          </Button>
        </Flex>
        <Empty type={SCREEN.EVENT} />
      </Flex>
      <Flex gap={20} style={styles.flex}>
        <Flex direction="row" justify="between" align="center">
          <Text size="xxl" weight={600}>
            이벤트 목록
          </Text>
          <Button onPress={() => setIsDropdownOpen(!isDropdownOpen)}>
            <Flex direction="row" align="center" gap={4}>
              <Icon.Switch />
              <Text>{FILTERS.find((f) => f.value === filter)?.name}</Text>
            </Flex>
          </Button>
          {isDropdownOpen && (
            <Flex style={styles.dropdownContainer} gap={10}>
              {FILTERS.map((f) => (
                <Button key={f.value} onPress={() => onSelectFilter(f.value)}>
                  <Text>{f.name}</Text>
                </Button>
              ))}
            </Flex>
          )}
        </Flex>
        <Suspense fallback={<Loading />}>
          <List type={SCREEN.EVENT} filter={filter} />
        </Suspense>
      </Flex>
    </Container>
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  flex: {
    flex: 1,
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
