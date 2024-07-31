import { SortOrder } from "../../util/SortOrder";

export type ChatOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  lastMessage?: SortOrder;
  messages?: SortOrder;
  participants?: SortOrder;
  updatedAt?: SortOrder;
};
