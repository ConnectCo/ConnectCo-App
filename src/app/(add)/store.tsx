import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";

import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import Button from "@/src/components/common/button";
import TextButton from "@/src/components/common/button/text-button";
import Container from "@/src/components/common/container";
import Flex from "@/src/components/common/flex";
import Icon from "@/src/components/common/icon";
import InputWithTitle from "@/src/components/common/input/input-with-title";
import SelectImage from "@/src/components/common/select-image";
import Text from "@/src/components/common/text";
import { colors } from "@/src/constants/color";
import { useCreateStore } from "@/src/lib/tanstack/mutations/store";
import { useAddressStore } from "@/src/lib/zustand/address";
import { ImagePickerProps } from "@/src/types/image";

interface InitialDataProps {
  images: ImagePickerProps[];
  name: string;
  detailAddress: string;
  latitude: number;
  longitude: number;
  storeNumber: string;
  operatingTime: string;
  description: string;
  businessLicense: { uri: string; name: string; type: string } | null;
}

const INITIAL_DATA: InitialDataProps = {
  images: [],
  name: "",
  detailAddress: "",
  latitude: 0,
  longitude: 0,
  storeNumber: "",
  operatingTime: "",
  description: "",
  businessLicense: null,
};

export default function StoreAdd() {
  const [data, setData] = useState(INITIAL_DATA);
  const { address, latitude, longitude, setAddress } = useAddressStore();

  const { mutateAsync, isPending } = useCreateStore();

  const submitDisabled = !data.name || !data.description || !address || isPending;

  const onPickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const { uri, assetId, mimeType } = result.assets[0];
      const exist = data.images.find((image) => image.assetId === assetId);
      if (!exist) {
        const newImages = [...data.images, { uri, assetId, mimeType: mimeType || "" }];
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

  const onComplete = async () => {
    const formData = new FormData();
    const request = {
      name: data.name,
      description: data.description,
      detailAddress: address,
      latitude: latitude,
      longitude: longitude,
      storeNumber: data.storeNumber,
      operatingTime: data.operatingTime,
    };
    data.images.forEach((image, index) => {
      formData.append("storeImages", {
        uri: image.uri,
        name: image.uri,
        type: image.mimeType,
      } as any);
    });

    // 2. businessLicense (단일 파일)
    if (data.businessLicense?.uri) {
      formData.append("businessLicense", {
        uri: data.businessLicense.uri,
        name: data.businessLicense.name,
        type: data.businessLicense.type, // 또는 image/jpeg, image/png 등 확장자에 맞게
      } as any);
    }
    formData.append("request", JSON.stringify(request));
    for (const [key, value] of formData.entries()) {
      console.log(key, value, "key, value");
    }
    await mutateAsync(formData);
  };

  const onAttachFile = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: ["application/pdf", "image/jpeg", "image/png", "image/tiff"],
    });
    if (result.assets) {
      const file = result.assets[0];
      setData((prev) => ({
        ...prev,
        businessLicense: {
          uri: file.uri,
          name: file.name,
          type: file.mimeType || "",
        },
      }));
    }
  };

  useEffect(() => {
    if (address) {
      setAddress({ address: "", latitude: 0, longitude: 0 });
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
        <Flex gap={12}>
          <Text size="lg" weight={600}>
            증빙 자료
          </Text>
          <Flex gap={8}>
            <Flex style={styles.businessLicense} direction="row" justify="between" align="center">
              <Text weight={500} style={styles.businessLicenseName}>
                {data.businessLicense?.name || "증빙 자료를 첨부해주세요!"}
              </Text>
              <Button>
                <Icon.Close fill={colors.gray300} />
              </Button>
            </Flex>
            <Button style={styles.button} onPress={onAttachFile}>
              <Flex gap={8} direction="row" justify="center" align="center">
                <Icon.Document />
                <Text weight={600} style={styles.file}>
                  파일 첨부하기
                </Text>
              </Flex>
            </Button>
          </Flex>
        </Flex>
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
          value={data.storeNumber}
          onChangeText={(e) => onChangeText("storeNumber", e.replace(/\D/g, ""))}
          placeholder="가게 연락처를 입력해주세요!"
          keyboardType="phone-pad"
        />
        <InputWithTitle
          title="운영시간"
          value={data.operatingTime}
          onChangeText={(e) => onChangeText("operatingTime", e)}
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
      <TextButton
        disabled={submitDisabled}
        type={submitDisabled ? "disabled" : "fill"}
        onPress={onComplete}
      >
        작성완료
      </TextButton>
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
  businessLicense: {
    padding: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.gray300,
  },
  businessLicenseName: {
    color: colors.gray300,
  },
  file: {
    color: colors.primary300,
  },
});
