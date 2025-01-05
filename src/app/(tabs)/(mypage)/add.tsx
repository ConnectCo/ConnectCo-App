import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";

import { useState } from "react";
import { StyleSheet } from "react-native";

import TextButton from "@/src/components/common/button/text-button";
import Calendar from "@/src/components/common/calendar";
import Container from "@/src/components/common/container";
import Icon from "@/src/components/common/icon";
import InputWithTitle from "@/src/components/common/input/input-with-title";
import SelectImage from "@/src/components/common/select-image";
import { colors } from "@/src/constants/color";
import { ImagePickerProps } from "@/src/types/image";
import { LocationProps } from "@/src/types/location";
import { formatTime } from "@/src/utils/date";

interface InitialDataProps {
  images: ImagePickerProps[];
  store: string;
  location: LocationProps;
  call: string;
  startTime: string;
  endTime: string;
  description: string;
}

const INITIAL_DATA: InitialDataProps = {
  images: [],
  store: "",
  location: { latitude: 0, longitude: 0, address: "" },
  call: "",
  startTime: "",
  endTime: "",
  description: "",
};

export default function StoreAddScreen() {
  const router = useRouter();
  const [data, setData] = useState(INITIAL_DATA);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

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

  const onOpenCalendar = (type: "startTime" | "endTime") => {
    setSelectedTime(type);
    setShowCalendar(true);
  };

  const onCloseCalendar = () => {
    setShowCalendar(false);
  };

  const onSelectDate = (time: Date) => {
    onChangeText(selectedTime, formatTime(time));
    onCloseCalendar();
  };

  const onComplete = () => {
    // API 요청 로직
    router.back();
  };

  return (
    <Container as="ScrollView" contentContainerStyle={styles.container}>
      <SelectImage images={data.images} onPickImage={onPickImage} onDelete={onDelete} />
      <InputWithTitle
        title="가게 이름"
        placeholder="가게 이름을 입력해주세요!"
        value={data.store}
        onChangeText={(e) => onChangeText("store", e)}
      />
      <InputWithTitle
        title="위치 정보"
        placeholder="지번, 도로명, 건물명으로 검색"
        value={data.location.address}
        left={<Icon.Search fill={colors.gray300} />}
        type="button"
      />
      <InputWithTitle
        title="가게 연락처"
        placeholder="가게 연락처를 입력해주세요!"
        value={data.call}
        onChangeText={(e) => onChangeText("call", e)}
        textContentType="telephoneNumber"
        keyboardType="number-pad"
      />
      <InputWithTitle
        title="운영 시작 시간"
        placeholder="가게의 운영 시작 시간을 입력해주세요!"
        value={data.startTime}
        type="button"
        onPress={() => onOpenCalendar("startTime")}
      />
      <InputWithTitle
        title="운영 마감 시간"
        placeholder="가게의 운영 마감 시간을 입력해주세요!"
        value={data.endTime}
        type="button"
        onPress={() => onOpenCalendar("endTime")}
      />
      <InputWithTitle
        multiline
        title="세부 설명"
        placeholder={
          "커넥코에 업로드 될 가게 세부 정보를 입력해주세요.\n설명이 자세할수록 더 많은 협찬 신청이 들어와요!"
        }
        value={data.description}
        onChangeText={(e) => onChangeText("description", e)}
      />
      <TextButton onPress={onComplete}>작성 완료</TextButton>
      <Calendar
        mode="time"
        isVisible={showCalendar}
        onConfirm={onSelectDate}
        onCancel={onCloseCalendar}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
});
