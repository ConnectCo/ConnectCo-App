import { ErrorBoundaryProps } from "expo-router";

import { Suspense } from "react";

import Error from "@/src/components/common/error";
import Loading from "@/src/components/common/loading";
import ChatScreen from "@/src/screens/tabs/chat";

export function ErrorBoundary(props: ErrorBoundaryProps) {
  return <Error {...props} />;
}

export default function ChatList() {
  return (
    <Suspense fallback={<Loading />}>
      <ChatScreen />
    </Suspense>
  );
}
