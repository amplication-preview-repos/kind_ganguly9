import { JsonValue } from "type-fest";

export type NewsFeed = {
  comments: JsonValue;
  contentSuggestions: JsonValue;
  createdAt: Date;
  friendActivities: JsonValue;
  id: string;
  likedPosts: JsonValue;
  updatedAt: Date;
};
