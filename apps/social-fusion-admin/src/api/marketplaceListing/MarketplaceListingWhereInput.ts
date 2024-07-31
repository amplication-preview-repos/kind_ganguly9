import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type MarketplaceListingWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  images?: JsonFilter;
  paymentDetails?: JsonFilter;
  price?: FloatNullableFilter;
  seller?: JsonFilter;
  title?: StringNullableFilter;
};
