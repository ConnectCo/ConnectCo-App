import type { ErrorBoundaryProps } from "expo-router";

import { Suspense } from "react";

import Error from "@/src/components/common/error";
import Loading from "@/src/components/common/loading";
import CouponScreen from "@/src/screens/tabs/coupon";

export function ErrorBoundary(props: ErrorBoundaryProps) {
  return <Error {...props} />;
}

export default function Coupon() {
  return (
    <Suspense fallback={<Loading />}>
      <CouponScreen />
    </Suspense>
  );
}
