import { JsonValue } from "type-fest";

export type UserProfile = {
  bio: string | null;
  coverPhoto: JsonValue;
  createdAt: Date;
  friends: JsonValue;
  id: string;
  personalInformation: JsonValue;
  privacySettings: JsonValue;
  profilePicture: JsonValue;
  updatedAt: Date;
};
