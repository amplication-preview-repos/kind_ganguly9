import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type NewsFeedWhereInput = {
  comments?: JsonFilter;
  contentSuggestions?: JsonFilter;
  friendActivities?: JsonFilter;
  id?: StringFilter;
  likedPosts?: JsonFilter;
};
