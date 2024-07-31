import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type GroupWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  members?: JsonFilter;
  name?: StringNullableFilter;
  privacySettings?: JsonFilter;
};
