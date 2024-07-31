import { NewsFeed as TNewsFeed } from "../api/newsFeed/NewsFeed";

export const NEWSFEED_TITLE_FIELD = "id";

export const NewsFeedTitle = (record: TNewsFeed): string => {
  return record.id?.toString() || String(record.id);
};
