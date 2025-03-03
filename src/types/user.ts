import { PROFILE } from "../constants/user";

export interface ProfileProps {
  profileId: number | null;
  profileType: PROFILE | null;
  profileName: string;
  profileImageUrl: string;
}
