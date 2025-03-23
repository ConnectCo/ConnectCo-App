import { router, useLocalSearchParams } from "expo-router";

import CommonDetail from "@/src/components/common/detail";
import Content from "@/src/components/common/text/content";
import { SCREEN } from "@/src/constants/screen";
import { useGetCouponDetail } from "@/src/lib/tanstack/quries/coupon";
import { CouponDetailDTO } from "@/src/models/coupon";

export default function CouponDetailScreen() {
  const { id } = useLocalSearchParams();

  const { data } = useGetCouponDetail<CouponDetailDTO>(+id);

  const onRouteStoreProfile = () => {
    router.push(`/store/${data.result.store.storeId}`);
  };

  const onRouteSuggest = () => {
    router.push(`/(event)/suggest/${id}`);
  };

  return (
    <CommonDetail
      images={data.result.images}
      type={SCREEN.COUPON}
      profile={{
        name: data.result.store.name,
        id: data.result.store.storeId,
      }}
      name={data.result.name}
      expiredAt={data.result.expiredAt}
      description={data.result.description}
      isLike={data.result.isLike}
      isMine={data.result.isMine}
      appliedCount={data.result.eventCount}
      onRouteProfile={onRouteStoreProfile}
      onPressRight={onRouteSuggest}
    >
      <Content title="쿠폰 등록일" content={data.result.createdAt} />
      <Content title="우선 협찬 대상" content={data.result.priorityTarget} />
      <Content title="유의사항" content={data.result.notification} />
    </CommonDetail>
  );
}
