import { Suspense } from "react";

import Loading from "@/src/components/common/loading";
import CouponDetailScreen from "@/src/screens/coupon/detail";

export default function Detail() {
  return (
    <Suspense fallback={<Loading />}>
      <CouponDetailScreen />
    </Suspense>
  );
}
