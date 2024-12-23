import { useLocalSearchParams } from "expo-router";

import { ScrollView, StyleSheet } from "react-native";

import ImageScroll from "@/components/event/image-scroll";
import { colors } from "@/constants/color";

const images = [
  {
    id: 1,
    source: require("../../../assets/images/event.png"),
  },
  {
    id: 2,
    source: require("../../../assets/images/event.png"),
  },
  {
    id: 3,
    source: require("../../../assets/images/event.png"),
  },
];

export default function DetailScreen() {
  const { id } = useLocalSearchParams();

  return (
    <ScrollView style={styles.container}>
      <ImageScroll images={images} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
});
