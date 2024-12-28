import { useRef, useState } from "react";
import { StyleSheet } from "react-native";

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
  const [modalExpanded, setModalExpanded] = useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const component = modalExpanded ? "ScrollView" : "View";

  const onChange = (index: number) => {
    setModalExpanded(index > 0);
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      onChange={onChange}
      index={0}
      snapPoints={["80%"]}
      style={styles.container}
    >
      <BottomSheetView style={styles.innerContainer}>
        <Container as={component}>
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
            <Flex gap={15}>
              {items.map((item) => (
                <Card key={item.id} {...item} />
              ))}
            </Flex>
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
});
