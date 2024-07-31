import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type EventWhereInput = {
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  reminders?: JsonFilter;
  rsvps?: JsonFilter;
  title?: StringNullableFilter;
};
