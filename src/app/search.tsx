import { useEffect, useState } from "react";
import { StyleSheet, TextInput } from "react-native";

import Container from "@/src/components/common/container";
import Flex from "@/src/components/common/flex";
import Text from "@/src/components/common/text";
import { colors } from "@/src/constants/color";

import Button from "../components/common/button";
import Header from "../components/common/header";
import Icon from "../components/common/icon";
import { addRecentSearch, getRecentSearch, removeRecentSearch } from "../utils/async-storage";

export default function SearchScreen() {
  const [histories, setHistories] = useState([]);
  const [search, setSearch] = useState("");

  const onSearch = async () => {
    if (search.trim() === "") return;

    const result = await addRecentSearch(search);
    setHistories(result);
  };

  const onRemove = async (search: string) => {
    const result = await removeRecentSearch(search);
    setHistories(result);
  };

  useEffect(() => {
    (async () => {
      const recentSearch = await getRecentSearch();
      setHistories(recentSearch);
    })();
  }, []);

  return (
    <>
      <Header type="primary">
        <Flex gap={8} direction="row" style={[styles.flex, styles.container]}>
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholderTextColor={colors.gray300}
            placeholder="예시) 간식행사"
            style={[styles.flex, styles.input]}
          />
          <Button onPress={onSearch}>
            <Icon.Search fill={colors.primary300} />
          </Button>
        </Flex>
      </Header>
      <Container as="View" style={styles.flex}>
        <Flex gap={14}>
          <Text size="lg" weight={600}>
            최근 검색어
          </Text>
          <Flex gap={10}>
            {histories.length === 0 ? (
              <Text size="lg" weight={600} style={styles.history}>
                최근 검색어가 없어요.
              </Text>
            ) : (
              histories.map((history) => (
                <Flex key={history} gap={10} direction="row">
                  <Text size="lg" weight={600} style={styles.history}>
                    {history}
                  </Text>
                  <Button onPress={() => onRemove(history)}>
                    <Text size="lg" weight={600} style={styles.history}>
                      X
                    </Text>
                  </Button>
                </Flex>
              ))
            )}
          </Flex>
        </Flex>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  history: {
    color: colors.gray500,
  },
  flex: {
    flex: 1,
  },
  container: {
    backgroundColor: colors.white,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  input: {
    fontWeight: 500,
  },
});
