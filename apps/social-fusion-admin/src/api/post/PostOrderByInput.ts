import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  comments?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  link?: SortOrder;
  photo?: SortOrder;
  reactions?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
  video?: SortOrder;
};
