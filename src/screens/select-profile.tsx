import { StyleSheet } from "react-native";

import Container from "@/src/components/common/container";
import Flex from "@/src/components/common/flex";
import Text from "@/src/components/common/text";

import ProfileList from "../components/select-profile/profile-list";
import { PROFILE } from "../constants/user";
import { useGetProfileList } from "../lib/tanstack/quries/auth";

export default function SelectProfileScreen() {
  const { data } = useGetProfileList();
  console.log(data);

  return (
    <Container as="View" style={styles.container}>
      <Text size="xl" weight={600}>
        이용할 프로필을 선택해주세요
      </Text>
      <Flex gap={44}>
        <ProfileList profiles={data.result.storeProfiles} type={PROFILE.STORE} />
        <ProfileList profiles={data.result.organizationProfiles} type={PROFILE.ORGANIZATION} />
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
