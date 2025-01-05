import { Image } from "expo-image";

import { useState } from "react";
import { Dimensions, FlatList, StyleSheet, View, ViewToken } from "react-native";

import { ImageProps } from "@/src/types/image";

import Text from "../text";

interface ViewableItemsProps {
  viewableItems: ViewToken<ImageProps>[];
}

interface ImageScrollProps {
  images: ImageProps[];
}

const { width } = Dimensions.get("screen");

export default function ImageScroll({ images }: ImageScrollProps) {
  const [currentIndex, setCurrentIndex] = useState(1);

  const onChangeIndex = ({ viewableItems }: ViewableItemsProps) => {
    if (viewableItems.length === 1) {
      const { index } = viewableItems[0];
      setCurrentIndex(index! + 1);
    }
  };

  return (
    <View style={styles.imageWrap}>
      <FlatList
        horizontal
        data={images}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <Image source={item.source} style={styles.image} contentFit="cover" />
        )}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onViewableItemsChanged={onChangeIndex}
      />
      <Text size="sm" style={styles.indexIndicator}>
        {currentIndex}/3
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
