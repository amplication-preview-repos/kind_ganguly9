import { SortOrder } from "../../util/SortOrder";

export type MarketplaceListingOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  images?: SortOrder;
  paymentDetails?: SortOrder;
  price?: SortOrder;
  seller?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
