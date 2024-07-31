import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PostWhereInput = {
  comments?: JsonFilter;
  id?: StringFilter;
  link?: StringNullableFilter;
  photo?: JsonFilter;
  reactions?: JsonFilter;
  text?: StringNullableFilter;
  video?: JsonFilter;
};
