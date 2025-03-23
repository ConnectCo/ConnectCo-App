import MainScreen from "@/src/components/common/main";
import { FILTER } from "@/src/constants/common";
import { SCREEN } from "@/src/constants/screen";
import { useGetCouponList } from "@/src/lib/tanstack/quries/coupon";
import { CouponListDTO } from "@/src/models/coupon";

export default function CouponScreen() {
  const { data, fetchNextPage, isFetchingNextPage } = useGetCouponList<CouponListDTO>(
    FILTER.DEADLINE
  );

  const onLoadMore = () => {
    !isFetchingNextPage && fetchNextPage();
  };

  return <MainScreen items={data?.result || []} type={SCREEN.COUPON} onLoadMore={onLoadMore} />;
}
