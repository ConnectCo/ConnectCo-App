import { FlatList, StyleSheet, View } from "react-native";

import Button from "../components/common/button";
import Flex from "../components/common/flex";
import Icon from "../components/common/icon";
import Input from "../components/common/input";
import Text from "../components/common/text";
import { colors } from "../constants/color";

const locationList = [
  {
    id: 1,
    name: "주소 별칭",
    address: "서울특별시 강남구 역삼동 123-45",
  },
  {
    id: 2,
    name: "주소 별칭",
    address: "서울특별시 강남구 역삼동 123-45",
  },
  {
    id: 3,
    name: "주소 별칭",
    address: "서울특별시 강남구 역삼동 123-45",
  },
];

export default function LocationSetting() {
  return (
    <View style={styles.container}>
      <Button style={styles.button}>
        <Input
          placeholder="지번, 도로명, 건물명으로 검색"
          readOnly
          left={<Icon.Search fill={colors.black} />}
        />
      </Button>
      <FlatList
        data={locationList}
        keyExtractor={(item) => item.id.toString()}
        style={{ overflow: "visible" }}
        renderItem={({ item, index }) => (
          <Button>
            <Flex
              direction="row"
              gap={12}
              align="center"
              style={[styles.locationItem, index === 0 && styles.currentLocationItem]}
            >
              {index === 0 ? <Icon.MarkerFill /> : <Icon.Marker />}
              <Flex gap={10}>
                <Flex direction="row" align="center" gap={6}>
                  <Text size="lg" weight={600}>
                    {item.name}
                  </Text>
                  {index === 0 && (
                    <Text size="xs" weight={600} style={styles.currentAddress}>
                      현재 설정된 주소
                    </Text>
                  )}
                </Flex>
                <Text weight={500}>{item.address}</Text>
              </Flex>
            </Flex>
            {index !== locationList.length - 1 && <View style={styles.divider} />}
          </Button>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    backgroundColor: colors.white,
    flex: 1,
    gap: 10,
  },
  button: {
    paddingHorizontal: 24,
  },
  locationItem: {
    padding: 24,
    backgroundColor: colors.white,
  },
  currentLocationItem: {
    backgroundColor: colors.primary100,
    borderRadius: 10,
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
    borderWidth: 1,
    borderColor: colors.white,
  },
  currentAddress: {
    color: colors.white,
    backgroundColor: colors.primary300,
    borderRadius: 15,
    paddingHorizontal: 8,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray300,
    marginHorizontal: 24,
  },
});
