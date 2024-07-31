import { SortOrder } from "../../util/SortOrder";

export type MediaOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  tags?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  uploader?: SortOrder;
  url?: SortOrder;
};
