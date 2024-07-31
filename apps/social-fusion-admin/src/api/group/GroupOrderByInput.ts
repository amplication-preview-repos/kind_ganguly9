import { SortOrder } from "../../util/SortOrder";

export type GroupOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  members?: SortOrder;
  name?: SortOrder;
  privacySettings?: SortOrder;
  updatedAt?: SortOrder;
};
