import { StyleSheet } from "react-native";

import Container from "@/src/components/common/container";
import Flex from "@/src/components/common/flex";
import Text from "@/src/components/common/text";

import ProfileList from "../components/select-profile/profile-list";
import { PROFILE } from "../constants/user";

const storeList = [
  {
    profileId: 0,
    profileType: "STORE",
    profileName: "호말커피",
    profileImageUrl: require("../assets/static/store.png"),
  },
  {
    profileId: 1,
    profileType: "STORE",
    profileName: "호말커피",
    profileImageUrl: require("../assets/static/store.png"),
  },
];

const organizationList = [
  {
    profileId: 2,
    profileType: "ORGANIZATION",
    profileName: "한양대학교",
    profileImageUrl: require("../assets/static/hanyang.png"),
  },
  {
    profileId: 3,
    profileType: "ORGANIZATION",
    profileName: "한양대학교 경제학과 학생회",
    profileImageUrl: require("../assets/static/hanyang.png"),
  },
];

export default function SelectProfileScreen() {
  return (
    <Container as="View" style={styles.container}>
      <Text size="xl" weight={600}>
        이용할 프로필을 선택해주세요
      </Text>
      <Flex gap={44}>
        <ProfileList profiles={storeList} type={PROFILE.STORE} />
        <ProfileList profiles={organizationList} type={PROFILE.ORGANIZATION} />
      </Flex>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 28,
  },
});
