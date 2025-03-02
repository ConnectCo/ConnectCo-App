import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";

import { useState } from "react";

import CommonAddScreen from "@/src/components/common/add";
import ButtonCalendar from "@/src/components/common/calendar/button-calendar";
import InputWithTitle from "@/src/components/common/input/input-with-title";
import { SCREEN } from "@/src/constants/screen";
import { ImagePickerProps } from "@/src/types/image";
import { formatDate } from "@/src/utils/date";

interface InitialDataProps {
  images: ImagePickerProps[];
  coupon: string;
  endDate: string;
  description: string;
  prioritryTarget: string;
  caution: string;
}

const INITIAL_DATA: InitialDataProps = {
  images: [],
  coupon: "",
  endDate: formatDate(new Date()),
  description: "",
  prioritryTarget: "",
  caution: "",
};

export default function AddScreen() {
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

  const onSelectDate = (date: Date) => {
    onChangeText("endDate", formatDate(date));
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
      type={SCREEN.COUPON}
      onPickImage={onPickImage}
      onDelete={onDelete}
      onChangeText={onChangeText}
      onComplete={onComplete}
    >
      <InputWithTitle
        title="쿠폰 이름"
        placeholder="예시) 쿠키 무료 제공 쿠폰, 음료 10% 할인 쿠폰"
        value={data.coupon}
        onChangeText={(e) => onChangeText("coupon", e)}
      />
      <ButtonCalendar title="신청 마감일" date={data.endDate} onConfirm={onSelectDate} />
    </CommonAddScreen>
  );
}
