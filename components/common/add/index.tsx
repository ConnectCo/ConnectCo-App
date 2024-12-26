import { StyleSheet } from "react-native";

import TextButton from "@/components/common/button/text-button";
import Container from "@/components/common/container";
import Flex from "@/components/common/flex";
import InputWithTitle from "@/components/common/input/input-with-title";
import SelectImage from "@/components/common/select-image";
import { ImagePickerProps } from "@/types/image";

import Calendar from "../calendar";

interface CommonAddScreenProps {
  children: React.ReactNode;
  images: ImagePickerProps[];
  description: string;
  prioritryTarget: string;
  caution: string;
  isVisible: boolean;
  type?: "event" | "coupon";
  onPickImage: () => void;
  onDelete: (id: string | null | undefined) => void;
  onChangeText: (key: string, value: string) => void;
  onConfirm: (date: Date) => void;
  onCancel: () => void;
  onComplete: () => void;
}

export default function CommonAddScreen({
  children,
  images,
  description,
  prioritryTarget,
  caution,
  isVisible,
  type = "event",
  onPickImage,
  onDelete,
  onChangeText,
  onConfirm,
  onCancel,
  onComplete,
}: CommonAddScreenProps) {
  const target = type === "event" ? "단체" : "가게";

  return (
    <Container as="ScrollView">
      <Flex gap={20}>
        <SelectImage images={images} onPickImage={onPickImage} onDelete={onDelete} />
        {children}
        <InputWithTitle
          multiline
          title="세부설명"
          placeholder={
            "커넥코 이벤트로 업로드 될 게시글 내용을  입력해주세요.\n설명이 자세할수록 더 많은 협찬 신청이 들어와요!"
          }
          value={description}
          onChangeText={(e) => onChangeText("description", e)}
        />
        <InputWithTitle
          multiline
          title="우선 협찬 대상"
          placeholder={`우선적으로 협찬을 받고 싶은 대상을 입력해주세요.\n대상에 해당하는 ${target}에서 연락이 올거에요 :)`}
          value={prioritryTarget}
          onChangeText={(e) => onChangeText("prioritryTarget", e)}
        />
        <InputWithTitle
          title="유의사항"
          placeholder={`협찬을 해주는 ${target}가 유의할 점을 입력해주세요!`}
          value={caution}
          onChangeText={(e) => onChangeText("caution", e)}
        />
      </Flex>
      <TextButton onPress={onComplete} style={styles.completeButton}>
        작성완료
      </TextButton>
      <Calendar isVisible={isVisible} onConfirm={onConfirm} onCancel={onCancel} />
    </Container>
  );
}

const styles = StyleSheet.create({
  completeButton: {
    marginVertical: 40,
  },
});
