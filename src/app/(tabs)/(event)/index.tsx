import MainScreen from "@/src/components/common/main";

const eventList = [
  {
    id: 1,
    host: "한양대학교",
    name: "한양대학교 행사",
    expiredAt: "2023.10.17 ~ 2023.10.29",
    thumbnail: require("../../../assets/static/hanyang.png"),
  },
  {
    id: 2,
    host: "건국대학교",
    name: "산업디자인과 전시회",
    expiredAt: "2023.10.17 ~ 2023.10.29",
    thumbnail: require("../../../assets/static/hanyang.png"),
  },
  {
    id: 3,
    host: "서울대학교",
    name: "서울대학교 축제",
    expiredAt: "2023.11.01 ~ 2023.11.05",
    thumbnail: require("../../../assets/static/hanyang.png"),
  },
  {
    id: 4,
    host: "연세대학교",
    name: "연세대학교 음악회",
    expiredAt: "2023.11.10 ~ 2023.11.12",
    thumbnail: require("../../../assets/static/hanyang.png"),
  },
];

export default function EventScreen() {
  return <MainScreen items={eventList} />;
}
