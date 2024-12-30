import { useLocalSearchParams, useRouter } from "expo-router";

import { useState } from "react";

import CommonDetail from "@/components/common/detail";
import Content from "@/components/common/text/content";

const images = [
  {
    id: 1,
    source: require("../../assets/images/coupon.png"),
  },
  {
    id: 2,
    source: require("../../assets/images/coupon.png"),
  },
  {
    id: 3,
    source: require("../../assets/images/coupon.png"),
  },
];

export default function DetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  // id를 이용해서 쿠폰 상세 내용 불러오기

  const [selected, setSelected] = useState(false);

  const onRouteStoreProfile = () => {
    router.push(`/(coupon)/store/${id}`);
  };

  const onRouteSuggest = () => {
    router.push(`/(coupon)/suggest/${id}`);
  };

  const onSelect = () => {
    setSelected((prev) => !prev);
  };

  return (
    <CommonDetail
      images={images}
      type="coupon"
      profile={{
        name: "호말커피",
        id: "homeal",
      }}
      title="쿠키 무료 제공 쿠폰"
      endDate="2023.12.29"
      description={"왕십리 최고의 카페 호말커피의\n맛있는 쿠키 6종 中 1가지를 무료로 제공합니다."}
      selected={selected}
      onPressFavorite={onSelect}
      onRouteProfile={onRouteStoreProfile}
      onRouteSwag={onRouteSuggest}
      onRouteChat={() => {}}
    >
      <Content title="쿠폰 등록일" content="2023.10.17" />
      <Content title="우선 협찬 대상" content="한양대학교 서울캠퍼스 학생" />
      <Content title="유의사항" content="쿠키 외 디저트류 제공 불가능" />
    </CommonDetail>
  );
}
