import { Post as TPost } from "../api/post/Post";

export const POST_TITLE_FIELD = "link";

export const PostTitle = (record: TPost): string => {
  return record.link?.toString() || String(record.id);
};
