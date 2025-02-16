import { useUserStore } from "@/src/lib/zustand/user";
import AuthScreen from "@/src/screens/auth";
import SelectProfileScreen from "@/src/screens/select-profile";
import MypageScreen from "@/src/screens/tabs/mypage";

export default function Mypage() {
  const status = useUserStore((state) => state.status);

  switch (status) {
    case "annonymous":
      return <AuthScreen />;
    case "select-profile":
      return <SelectProfileScreen />;
    case "authenticated":
      return <MypageScreen />;
  }
}
