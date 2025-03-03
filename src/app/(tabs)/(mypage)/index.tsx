import { Suspense } from "react";

import Loading from "@/src/components/common/loading";
import { useUserStore } from "@/src/lib/zustand/user";
import AuthScreen from "@/src/screens/auth";
import SelectProfileScreen from "@/src/screens/select-profile";
import MypageScreen from "@/src/screens/tabs/mypage";

export default function Mypage() {
  const status = useUserStore((state) => state.status);

  return status === "authenticated" ? (
    <Suspense fallback={<Loading />}>
      <MypageScreen />
    </Suspense>
  ) : status === "select-profile" ? (
    <Suspense fallback={<Loading />}>
      <SelectProfileScreen />
    </Suspense>
  ) : (
    <AuthScreen />
  );
}
