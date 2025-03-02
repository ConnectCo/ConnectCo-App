import { Suspense } from "react";

import Loading from "@/src/components/common/loading";
import DetailScreen from "@/src/screens/chat/detail";

export default function Detail() {
  return (
    <Suspense fallback={<Loading />}>
      <DetailScreen />
    </Suspense>
  );
}
