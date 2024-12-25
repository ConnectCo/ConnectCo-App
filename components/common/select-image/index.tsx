import { Image } from "expo-image";

import { ScrollView, StyleSheet, View } from "react-native";

import Button from "@/components/common/button";
import Flex from "@/components/common/flex";
import Icon from "@/components/common/icon";
import Text from "@/components/common/text";
import { colors } from "@/constants/color";
import { ImagePickerProps } from "@/types/image";

interface SelectImageProps {
  images: ImagePickerProps[];
  onPickImage: () => void;
  onDelete: (id: string | null | undefined) => void;
}

export default function SelectImage({ images, onPickImage, onDelete }: SelectImageProps) {
  return (
    <Flex direction="row" gap={10}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.imageList}
        contentContainerStyle={styles.image}
      >
        <Button onPress={onPickImage} style={styles.commonContainer}>
          <Flex justify="center" align="center" gap={4} style={styles.addPhotoWrap}>
            <Icon.Camera />
            <Text size="sm">사진 {images.length}/10</Text>
          </Flex>
        </Button>
        {images.length !== 0 &&
          images.map(({ assetId, uri }) => (
            <View key={assetId}>
              <Image
                source={{ uri }}
                style={styles.commonContainer}
                contentFit="cover"
                contentPosition="center"
              />
              <Button onPress={() => onDelete(assetId)} style={styles.deleteButton}>
                <Icon.Close />
              </Button>
            </View>
          ))}
      </ScrollView>
    </Flex>
  );
}

const styles = StyleSheet.create({
  commonContainer: {
    borderWidth: 1,
    borderColor: colors.gray300,
    borderRadius: 5,
    width: 65,
    height: 65,
    position: "relative",
    overflow: "hidden",
  },
  addPhotoWrap: {
    height: "100%",
  },
  deleteButton: {
    position: "absolute",
    top: -12,
    right: -12,
    zIndex: 1,
  },
  image: {
    gap: 10,
  },
  imageList: {
    overflow: "visible",
  },
});
