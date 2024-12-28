import { useRef } from "react";
import { ScrollView, StyleSheet } from "react-native";

import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

import Button from "../common/button";
import Card, { CardProps } from "../common/card";
import Container from "../common/container";
import Flex from "../common/flex";
import Icon from "../common/icon";
import Text from "../common/text";

interface DrawerProps {
  items: CardProps[];
}

export default function CustomBottomSheet({ items }: DrawerProps) {
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <BottomSheet ref={bottomSheetRef} index={0} snapPoints={["80%"]} style={styles.container}>
      <BottomSheetView style={styles.innerContainer}>
        <Container as="View" style={{ overflow: "hidden" }}>
          <Flex gap={20}>
            <Flex direction="row" justify="between" align="center">
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
            <ScrollView bounces={false} style={styles.scrollView}>
              <Flex gap={15}>
                {items.length === 0 ? (
                  <Text align="center">주변에 아무것도 없어요 :(</Text>
                ) : (
                  items.map((item) => <Card key={item.id} {...item} />)
                )}
              </Flex>
            </ScrollView>
          </Flex>
        </Container>
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
    height: 200,
  },
  scrollView: {
    overflow: "visible",
  },
});
