import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";

import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import TextButton from "@/src/components/common/button/text-button";
import Container from "@/src/components/common/container";
import Flex from "@/src/components/common/flex";
import Icon from "@/src/components/common/icon";
import InputWithTitle from "@/src/components/common/input/input-with-title";
import SelectImage from "@/src/components/common/select-image";
import { colors } from "@/src/constants/color";
import { useAddressStore } from "@/src/lib/zustand/address";
import { ImagePickerProps } from "@/src/types/image";

interface InitialDataProps {
  images: ImagePickerProps[];
  name: string;
  location: string;
  phone: string;
  operatingHours: string;
  description: string;
}

const INITIAL_DATA: InitialDataProps = {
  images: [],
  name: "",
  location: "",
  phone: "",
  operatingHours: "",
  description: "",
};

export default function StoreAdd() {
  const [data, setData] = useState(INITIAL_DATA);
  const { address, setAddress } = useAddressStore();

  const onPickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const { uri, assetId } = result.assets[0];
      const exist = data.images.find((image) => image.assetId === assetId);
      if (!exist) {
        const newImages = [...data.images, { uri, assetId }];
        setData((prev) => ({ ...prev, images: newImages }));
      }
    }
  };

  const onDelete = (id: string | null | undefined) => {
    const newImages = data.images.filter((image) => image.assetId !== id);
    setData((prev) => ({ ...prev, images: newImages }));
  };

  const onChangeText = (key: string, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const onSearchAddress = () => {
    router.push("/address");
  };

  const onComplete = () => {
    router.back();
  };

  useEffect(() => {
    if (address) {
      setAddress("");
    }
  }, []);

  return (
    <Container as="ScrollView" contentContainerStyle={styles.container}>
      <SelectImage images={data.images} onPickImage={onPickImage} onDelete={onDelete} />
      <Flex gap={20}>
        <InputWithTitle
          title="가게 이름"
          value={data.name}
          onChangeText={(e) => onChangeText("name", e)}
          placeholder="가게의 이름을 입력해주세요!"
        />
        <InputWithTitle
          title="위치 정보"
          placeholder="지번, 도로명, 건물명으로 검색"
          type="button"
          left={<Icon.Search fill={colors.black} />}
          value={address}
          onPress={onSearchAddress}
        />
        <InputWithTitle
          title="가게 연락처"
          value={data.phone}
          onChangeText={(e) => onChangeText("phone", e.replace(/\D/g, ""))}
          placeholder="가게 연락처를 입력해주세요!"
          keyboardType="phone-pad"
        />
        <InputWithTitle
          title="운영시간"
          value={data.operatingHours}
          onChangeText={(e) => onChangeText("operatingHours", e)}
          placeholder="가게의 운영시간을 입력해주세요!"
        />
        <InputWithTitle
          title="세부설명"
          value={data.description}
          onChangeText={(e) => onChangeText("description", e)}
          placeholder={
            "커넥코에 업로드 될 가게 세부 정보를 입력해주세요.\n설명이 자세할수록 더 많은 협찬 신청이 들어와요!"
          }
          multiline
        />
      </Flex>
      <TextButton onPress={onComplete}>작성완료</TextButton>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  button: {
    paddingVertical: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.primary300,
  },
  add: {
    color: colors.primary300,
  },
});
