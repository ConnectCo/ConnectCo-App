import { Image } from "expo-image";

import { useState } from "react";
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

import Text from "../text";

const { width } = Dimensions.get("screen");

export default function ImageScroll({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(1);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    setCurrentIndex(index + 1);
  };

  return (
    <View style={styles.imageWrap}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        {images.map((item, idx) => (
          <Image key={`image-${idx}`} source={item} style={styles.image} contentFit="cover" />
        ))}
      </ScrollView>
      <Text size="sm" style={styles.indexIndicator}>
        {currentIndex}/{images.length}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imageWrap: {
    position: "relative",
  },
  image: {
    width,
    height: width / 1.55,
    // 이미지 비율을 16:9로 할지 아니면 피그마 있는대로 할지
    // 16:9로 한다면 1.78로 나누면 됨
  },
  indexIndicator: {
    position: "absolute",
    bottom: 8,
    right: 24,
    color: "white",
  },
});
