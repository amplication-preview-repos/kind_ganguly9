import { MarketplaceListingWhereInput } from "./MarketplaceListingWhereInput";
import { MarketplaceListingOrderByInput } from "./MarketplaceListingOrderByInput";

export type MarketplaceListingFindManyArgs = {
  where?: MarketplaceListingWhereInput;
  orderBy?: Array<MarketplaceListingOrderByInput>;
  skip?: number;
  take?: number;
};
