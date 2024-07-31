import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserProfileWhereInput = {
  bio?: StringNullableFilter;
  coverPhoto?: JsonFilter;
  friends?: JsonFilter;
  id?: StringFilter;
  personalInformation?: JsonFilter;
  privacySettings?: JsonFilter;
  profilePicture?: JsonFilter;
};
