import { MarketplaceListing as TMarketplaceListing } from "../api/marketplaceListing/MarketplaceListing";

export const MARKETPLACELISTING_TITLE_FIELD = "title";

export const MarketplaceListingTitle = (
  record: TMarketplaceListing
): string => {
  return record.title?.toString() || String(record.id);
};
