import MainScreen from "@/src/components/common/main";
import { SCREEN } from "@/src/constants/screen";

const couponList = [
  {
    id: 1,
    host: "호말",
    title: "쿠키 무료 제공 쿠폰",
    duration: "2023.10.17 ~ 2023.10.29",
    source: require("../../../assets/static/homeal.png"),
  },
  {
    id: 2,
    host: "호말",
    title: "전 음료 10%할인 쿠폰",
    duration: "2023.10.17 ~ 2023.10.29",
    source: require("../../../assets/static/homeal.png"),
  },
  {
    id: 3,
    host: "호말",
    title: "샌드위치 10% 할인 쿠폰",
    duration: "2023.11.01 ~ 2023.11.05",
    source: require("../../../assets/static/homeal.png"),
  },
  {
    id: 4,
    host: "호말",
    title: "아메리카노 무료",
    duration: "2023.11.10 ~ 2023.11.12",
    source: require("../../../assets/static/homeal.png"),
  },
];

export default function CouponScreen() {
  return <MainScreen items={couponList} type={SCREEN.COUPON} />;
}
