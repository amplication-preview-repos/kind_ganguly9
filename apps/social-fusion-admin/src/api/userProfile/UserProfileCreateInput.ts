import { InputJsonValue } from "../../types";

export type UserProfileCreateInput = {
  bio?: string | null;
  coverPhoto?: InputJsonValue;
  friends?: InputJsonValue;
  personalInformation?: InputJsonValue;
  privacySettings?: InputJsonValue;
  profilePicture?: InputJsonValue;
};
