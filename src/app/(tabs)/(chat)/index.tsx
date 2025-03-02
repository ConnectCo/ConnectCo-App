import { ErrorBoundaryProps } from "expo-router";

import { Suspense } from "react";

import Error from "@/src/components/common/error";
import Loading from "@/src/components/common/loading";
import { useUserStore } from "@/src/lib/zustand/user";
import AuthScreen from "@/src/screens/auth";
import SelectProfileScreen from "@/src/screens/select-profile";
import ChatListScreen from "@/src/screens/tabs/chat";

export function ErrorBoundary(props: ErrorBoundaryProps) {
  return <Error {...props} />;
}

export default function ChatList() {
  const status = useUserStore((state) => state.status);

  return status === "authenticated" ? (
    <Suspense fallback={<Loading />}>
      <ChatListScreen />
    </Suspense>
  ) : status === "select-profile" ? (
    <SelectProfileScreen />
  ) : (
    <AuthScreen />
  );
}
