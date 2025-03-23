import type { ErrorBoundaryProps } from "expo-router";

import { Suspense } from "react";

import Error from "@/src/components/common/error";
import Loading from "@/src/components/common/loading";
import EventScreen from "@/src/screens/tabs/event";

export function ErrorBoundary(props: ErrorBoundaryProps) {
  return <Error {...props} />;
}

export default function Event() {
  return (
    <Suspense fallback={<Loading />}>
      <EventScreen />
    </Suspense>
  );
}
