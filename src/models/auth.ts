import { PROFILE } from "../constants/user";

export interface OAuthDTO {
  memberId: number;
  profile: { profileId: number | null; profileType: PROFILE | null };
  accessToken: string;
  refreshToken: string;
}
