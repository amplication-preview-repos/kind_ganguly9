import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ChatWhereInput = {
  id?: StringFilter;
  lastMessage?: JsonFilter;
  messages?: JsonFilter;
  participants?: JsonFilter;
};
