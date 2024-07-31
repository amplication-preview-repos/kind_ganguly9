import { SortOrder } from "../../util/SortOrder";

export type StoryOrderByInput = {
  comments?: SortOrder;
  createdAt?: SortOrder;
  expiryTime?: SortOrder;
  id?: SortOrder;
  photo?: SortOrder;
  reactions?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
  video?: SortOrder;
};
