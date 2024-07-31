import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MediaWhereInput = {
  id?: StringFilter;
  tags?: JsonFilter;
  typeField?: StringNullableFilter;
  uploader?: JsonFilter;
  url?: StringNullableFilter;
};
