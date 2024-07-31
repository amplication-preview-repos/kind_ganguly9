import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  readReceipts?: SortOrder;
  sender?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
