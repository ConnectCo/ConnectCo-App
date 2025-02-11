import { router, useLocalSearchParams } from "expo-router";

import CommonDetail from "@/src/components/common/detail";
import Content from "@/src/components/common/text/content";
import { SCREEN } from "@/src/constants/screen";

const images = [
  {
    id: 1,
    source: require("../../assets/static/coupon.png"),
  },
  {
    id: 2,
    source: require("../../assets/static/coupon.png"),
  },
  {
    id: 3,
    source: require("../../assets/static/coupon.png"),
  },
];

export default function DetailScreen() {
  const { id } = useLocalSearchParams();
  // id를 이용해서 쿠폰 상세 내용 불러오기

  const onRouteStoreProfile = () => {
    router.push(`/store/${id}`);
  };

  const onRouteSuggest = () => {
    router.push(`/(event)/suggest/${id}`);
  };

  return (
    <CommonDetail
      images={images}
      type={SCREEN.COUPON}
      profile={{
        name: "호말커피",
        id: "homeal",
      }}
      name="쿠키 무료 제공 쿠폰"
      expiredAt="2023.12.29"
      description={"왕십리 최고의 카페 호말커피의\n맛있는 쿠키 6종 中 1가지를 무료로 제공합니다."}
      isLike={false}
      isMine={false}
      appliedCount={0}
      onRouteProfile={onRouteStoreProfile}
      onPressRight={onRouteSuggest}
    >
      <Content title="쿠폰 등록일" content="2023.10.17" />
      <Content title="우선 협찬 대상" content="한양대학교 서울캠퍼스 학생" />
      <Content title="유의사항" content="쿠키 외 디저트류 제공 불가능" />
    </CommonDetail>
  );
}
