import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  reminders?: SortOrder;
  rsvps?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};