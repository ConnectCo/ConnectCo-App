import { useLocalSearchParams, useRouter } from "expo-router";

import { useState } from "react";

import CommonDetail from "@/src/components/common/detail";
import Content from "@/src/components/common/text/content";

const images = [
  {
    id: 1,
    source: require("../../assets/static/event.png"),
  },
  {
    id: 2,
    source: require("../../assets/static/event.png"),
  },
  {
    id: 3,
    source: require("../../assets/static/event.png"),
  },
];

export default function DetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  // id를 이용해서 이벤트 상세 내용 불러오기

  const [selected, setSelected] = useState(false);

  const onRouteCollegeProfile = () => {
    router.push(`/(event)/college/${id}`);
  };

  const onRouteSuggest = () => {
    router.push(`/(event)/suggest/${id}`);
  };

  const onSelect = () => {
    setSelected((prev) => !prev);
  };

  return (
    <CommonDetail
      images={images}
      profile={{
        name: "한양대학교",
        id: "hanyang",
      }}
      title="한양패스 이벤트"
      endDate="2023.12.29"
      description="오직 한양인을 위한 상권 제휴, HANYANG PASS 한양대학교 서울캠퍼스 재학생 및 휴학생에게 제공되는 협찬권입니다."
      selected={selected}
      onPressFavorite={onSelect}
      onRouteProfile={onRouteCollegeProfile}
      onRouteSwag={onRouteSuggest}
      onRouteChat={() => {}}
    >
      <Content title="기간" content="2023.10.17~2023.12.31" />
      <Content title="혜택 대상" content="한양대학교 서울캠퍼스 소속 재학생 및 휴학생" />
      <Content title="신청조건" content="음식점" />
      <Content title="우선 협찬 대상" content="한양대학교 근처 음식점" />
      <Content title="이벤트 장소" content={"한양대학교 서울캠퍼스경영관\n한양대학교 서울캠퍼스"} />
      <Content
        title="유의사항"
        content="학생들이 모바일 학생증 및 실물 학생증 제시할 시 협찬 제공해주셔야 합니다."
      />
    </CommonDetail>
  );
}
