import { InputJsonValue } from "../../types";

export type MarketplaceListingCreateInput = {
  description?: string | null;
  images?: InputJsonValue;
  paymentDetails?: InputJsonValue;
  price?: number | null;
  seller?: InputJsonValue;
  title?: string | null;
};
