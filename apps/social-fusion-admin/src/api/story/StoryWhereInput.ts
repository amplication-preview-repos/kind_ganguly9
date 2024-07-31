import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type StoryWhereInput = {
  comments?: JsonFilter;
  expiryTime?: DateTimeNullableFilter;
  id?: StringFilter;
  photo?: JsonFilter;
  reactions?: JsonFilter;
  text?: StringNullableFilter;
  video?: JsonFilter;
};
