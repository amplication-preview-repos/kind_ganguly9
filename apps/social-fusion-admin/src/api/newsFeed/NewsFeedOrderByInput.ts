import { SortOrder } from "../../util/SortOrder";

export type NewsFeedOrderByInput = {
  comments?: SortOrder;
  contentSuggestions?: SortOrder;
  createdAt?: SortOrder;
  friendActivities?: SortOrder;
  id?: SortOrder;
  likedPosts?: SortOrder;
  updatedAt?: SortOrder;
};
