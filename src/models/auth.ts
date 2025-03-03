import { PROFILE } from "../constants/user";
import { ProfileProps } from "../types/user";

export interface OAuthDTO {
  memberId: number;
  profile: { profileId: number | null; profileType: PROFILE | null };
  accessToken: string;
  refreshToken: string;
}

export interface ProfileListDTO {
  storeProfiles: ProfileProps[];
  organizationProfiles: ProfileProps[];
}
