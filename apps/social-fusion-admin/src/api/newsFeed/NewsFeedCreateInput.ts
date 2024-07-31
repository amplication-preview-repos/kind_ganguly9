import { InputJsonValue } from "../../types";

export type NewsFeedCreateInput = {
  comments?: InputJsonValue;
  contentSuggestions?: InputJsonValue;
  friendActivities?: InputJsonValue;
  likedPosts?: InputJsonValue;
};
