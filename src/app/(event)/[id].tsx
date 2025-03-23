import { Suspense } from "react";

import Loading from "@/src/components/common/loading";
import EventDetailScreen from "@/src/screens/event/detail";

export default function Detail() {
  return (
    <Suspense fallback={<Loading />}>
      <EventDetailScreen />
    </Suspense>
  );
}
