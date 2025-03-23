import { router, useLocalSearchParams } from "expo-router";

import CommonDetail from "@/src/components/common/detail";
import Content from "@/src/components/common/text/content";
import { useGetEventDetail } from "@/src/lib/tanstack/quries/event";
import { EventDetailDTO } from "@/src/models/event";

export default function EventDetailScreen() {
  const { id } = useLocalSearchParams();

  const { data } = useGetEventDetail<EventDetailDTO>(+id);

  const onRouteStoreProfile = () => {
    router.push(`/store/${data.result.organization.organizationId}`);
  };

  const onRouteSuggest = () => {
    router.push(`/(event)/suggest/${id}`);
  };

  return (
    <CommonDetail
      images={data.result.images}
      profile={{
        name: data.result.organization.name,
        id: data.result.organization.organizationId,
      }}
      name={data.result.name}
      expiredAt={data.result.expiredAt}
      description={data.result.description}
      isLike={data.result.isLike}
      isMine={data.result.isMine}
      appliedCount={data.result.couponCount}
      onRouteProfile={onRouteStoreProfile}
      onPressRight={onRouteSuggest}
    >
      <Content title="기간" content={`${data.result.startAt}~${data.result.endAt}`} />
      <Content title="혜택 대상" content={data.result.benefitTarget} />
      <Content title="우선 협찬 대상" content={data.result.priorityTarget} />
      <Content title="이벤트 장소" content={data.result.address.detailAddress} />
      <Content title="유의사항" content={data.result.notification} />
    </CommonDetail>
  );
}
