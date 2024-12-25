import * as ImagePicker from "expo-image-picker";

import { useState } from "react";
import { StyleSheet } from "react-native";

import TextButton from "@/components/common/button/text-button";
import Container from "@/components/common/container";
import Flex from "@/components/common/flex";
import Icon from "@/components/common/icon";
import Input from "@/components/common/input";
import InputWithTitle from "@/components/common/input/input-with-title";
import SelectImage from "@/components/common/select-image";
import { colors } from "@/constants/color";
import { ImagePickerProps } from "@/types/image";

export default function Add() {
  const [images, setImages] = useState<ImagePickerProps[]>([]);

  const onPickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const { uri, assetId } = result.assets[0];
      const exist = images.find((image) => image.assetId === assetId);
      if (!exist) setImages((prev) => [...prev, { uri, assetId }]);
    }
  };

  const onDelete = (id: string | null | undefined) => {
    setImages((prev) => prev.filter((image) => image.assetId !== id));
  };

  return (
    <Container as="ScrollView">
      <Flex gap={20}>
        <SelectImage images={images} onPickImage={onPickImage} onDelete={onDelete} />
        <InputWithTitle
          title="이벤트 이름"
          placeholder="예시) 커넥코대학교 방송국 퀴즈 경품, 커넥코 패스"
        />
        <Flex gap={10}>
          <InputWithTitle
            title="이벤트 장소"
            placeholder="지번, 도로명, 건물명으로 검색"
            type="button"
            left={<Icon.Search fill={colors.black} />}
          />
          <Input placeholder="상세주소를 입력해주세요 (선택)" />
        </Flex>
        <InputWithTitle
          title="학교"
          placeholder="학교명을 검색하세요. 예시) 커넥코 대학교"
          type="button"
          left={<Icon.Search fill={colors.black} />}
          description="학교 등록 시 학교 주변 가게의 사장님께 알람이 가요!"
          optional
        />
        <InputWithTitle
          title="협찬 기간"
          placeholder="언제부터 언제까지 협찬을 원하시나요?"
          type="button"
          right={<Icon.Calendar />}
        />
        <InputWithTitle
          title="협찬 제안 마감일"
          placeholder="언제까지 협찬을 제안 받으실건가요?"
          type="button"
          right={<Icon.Calendar />}
        />
        <InputWithTitle
          title="혜택 대상"
          placeholder="이벤트 혜택을 받는 대상이 누구인지 입력해주세요."
        />
        <InputWithTitle
          multiline
          title="세부설명"
          placeholder={
            "커넥코 이벤트로 업로드 될 게시글 내용을  입력해주세요.\n설명이 자세할수록 더 많은 협찬 신청이 들어와요!"
          }
        />
        <InputWithTitle
          multiline
          title="우선 협찬 대상"
          placeholder={
            "우선적으로 협찬을 받고 싶은 대상을 입력해주세요.\n대상에 해당하는 가게에서 연락이 올거에요 :)"
          }
        />
        <InputWithTitle
          title="유의사항"
          placeholder="협찬을 해주는 가게가 유의할 점을 입력해주세요!"
        />
      </Flex>
      <TextButton style={styles.completeButton}>작성완료</TextButton>
    </Container>
  );
}

const styles = StyleSheet.create({
  completeButton: {
    marginVertical: 40,
  },
});
