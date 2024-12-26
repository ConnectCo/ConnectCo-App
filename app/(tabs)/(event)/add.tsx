import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";

import { useState } from "react";

import CommonAddScreen from "@/components/common/add";
import Calendar from "@/components/common/calendar";
import Flex from "@/components/common/flex";
import Icon from "@/components/common/icon";
import Input from "@/components/common/input";
import InputWithTitle from "@/components/common/input/input-with-title";
import { colors } from "@/constants/color";
import { ImagePickerProps } from "@/types/image";
import { formatDate } from "@/utils/date";

interface InitialDataProps {
  images: ImagePickerProps[];
  event: string;
  place: string;
  detailPlace: string;
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
  place: "",
  detailPlace: "",
  college: "",
  startDate: "",
  endDate: "",
  target: "",
  description: "",
  prioritryTarget: "",
  caution: "",
};

export default function AddScreen() {
  const router = useRouter();
  const [data, setData] = useState(INITIAL_DATA);
  const [calendar, setCalendar] = useState({ open: false, target: "" });

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

  const onOpenCalendar = (target: string) => {
    setCalendar({ open: true, target });
  };

  const onCloseCalendar = () => {
    setCalendar({ open: false, target: "" });
  };

  const onSelectDate = (date: Date) => {
    onChangeText(calendar.target, formatDate(date));
    onCloseCalendar();
  };

  const onComplete = () => {
    // API 요청 로직
    router.back();
  };

  return (
    <CommonAddScreen
      images={data.images}
      description={data.description}
      prioritryTarget={data.prioritryTarget}
      caution={data.caution}
      isVisible={calendar.open}
      onPickImage={onPickImage}
      onDelete={onDelete}
      onChangeText={onChangeText}
      onConfirm={onSelectDate}
      onCancel={onCloseCalendar}
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
          value={data.place}
        />
        <Input
          placeholder="상세주소를 입력해주세요 (선택)"
          value={data.detailPlace}
          onChangeText={(e) => onChangeText("detailPlace", e)}
        />
      </Flex>
      <InputWithTitle
        title="학교"
        placeholder="학교명을 검색하세요. 예시) 커넥코 대학교"
        type="button"
        left={<Icon.Search fill={colors.black} />}
        description="학교 등록 시 학교 주변 가게의 사장님께 알람이 가요!"
        optional
        value={data.college}
      />
      <InputWithTitle
        title="협찬 기간"
        placeholder="언제부터 언제까지 협찬을 원하시나요?"
        type="button"
        right={<Icon.Calendar />}
        value={data.startDate}
        onPress={() => onOpenCalendar("startDate")}
      />
      <InputWithTitle
        title="협찬 제안 마감일"
        placeholder="언제까지 협찬을 제안 받으실건가요?"
        type="button"
        right={<Icon.Calendar />}
        value={data.endDate}
        onPress={() => onOpenCalendar("endDate")}
      />
      <InputWithTitle
        title="혜택 대상"
        placeholder="이벤트 혜택을 받는 대상이 누구인지 입력해주세요."
        value={data.target}
        onChangeText={(e) => onChangeText("target", e)}
      />
      <Calendar isVisible={calendar.open} onConfirm={onSelectDate} onCancel={onCloseCalendar} />
    </CommonAddScreen>
  );
}
