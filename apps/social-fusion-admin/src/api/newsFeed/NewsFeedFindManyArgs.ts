import { NewsFeedWhereInput } from "./NewsFeedWhereInput";
import { NewsFeedOrderByInput } from "./NewsFeedOrderByInput";

export type NewsFeedFindManyArgs = {
  where?: NewsFeedWhereInput;
  orderBy?: Array<NewsFeedOrderByInput>;
  skip?: number;
  take?: number;
};
