import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";

import { useEffect, useState } from "react";

import CommonAddScreen from "@/src/components/common/add";
import ButtonCalendar from "@/src/components/common/calendar/button-calendar";
import Flex from "@/src/components/common/flex";
import Icon from "@/src/components/common/icon";
import Input from "@/src/components/common/input";
import InputWithTitle from "@/src/components/common/input/input-with-title";
import { colors } from "@/src/constants/color";
import { useAddressStore } from "@/src/lib/zustand/address";
import { ImagePickerProps } from "@/src/types/image";
import { formatDate } from "@/src/utils/date";

interface InitialDataProps {
  images: ImagePickerProps[];
  event: string;
  detailAddress: string;
  college: string;
  startDate: string;
  endDate: string;
  target: string;
  description: string;
  prioritryTarget: string;
  caution: string;
}

const INITIAL_DATA: InitialDataProps = {
  images: [],
  event: "",
  detailAddress: "",
  college: "",
  startDate: formatDate(new Date()),
  endDate: formatDate(new Date()),
  target: "",
  description: "",
  prioritryTarget: "",
  caution: "",
};

export default function AddScreen() {
  const { address, setAddress } = useAddressStore();
  const router = useRouter();
  const [data, setData] = useState(INITIAL_DATA);

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

  const onSelectDate = (target: "startDate" | "endDate", date: Date) => {
    onChangeText(target, formatDate(date));
  };

  const onComplete = () => {
    // API 요청 로직
    router.back();
  };

  useEffect(() => {
    if (address) {
      setAddress("");
    }
  }, []);

  return (
    <CommonAddScreen
      images={data.images}
      description={data.description}
      prioritryTarget={data.prioritryTarget}
      caution={data.caution}
      onPickImage={onPickImage}
      onDelete={onDelete}
      onChangeText={onChangeText}
      onComplete={onComplete}
    >
      <InputWithTitle
        title="이벤트 이름"
        placeholder="예시) 커넥코대학교 방송국 퀴즈 경품, 커넥코 패스"
        value={data.event}
        onChangeText={(e) => onChangeText("event", e)}
      />
      <Flex gap={10}>
        <InputWithTitle
          title="이벤트 장소"
          placeholder="지번, 도로명, 건물명으로 검색"
          type="button"
          left={<Icon.Search fill={colors.black} />}
          value={address}
          onPress={onSearchAddress}
        />
        <Input
          placeholder="상세주소를 입력해주세요 (선택)"
          value={data.detailAddress}
          onChangeText={(e) => onChangeText("detailAddress", e)}
        />
      </Flex>
      <ButtonCalendar
        title="협찬 기간"
        date={data.startDate}
        onConfirm={(date) => onSelectDate("startDate", date)}
      />
      <ButtonCalendar
        title="협찬 제안 마감일"
        date={data.endDate}
        onConfirm={(date) => onSelectDate("endDate", date)}
      />
      <InputWithTitle
        title="혜택 대상"
        placeholder="이벤트 혜택을 받는 대상이 누구인지 입력해주세요."
        value={data.target}
        onChangeText={(e) => onChangeText("target", e)}
      />
    </CommonAddScreen>
  );
}
