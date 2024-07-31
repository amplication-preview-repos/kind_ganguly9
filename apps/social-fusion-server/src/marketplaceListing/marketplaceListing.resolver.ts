import * as graphql from "@nestjs/graphql";
import { MarketplaceListingResolverBase } from "./base/marketplaceListing.resolver.base";
import { MarketplaceListing } from "./base/MarketplaceListing";
import { MarketplaceListingService } from "./marketplaceListing.service";

@graphql.Resolver(() => MarketplaceListing)
export class MarketplaceListingResolver extends MarketplaceListingResolverBase {
  constructor(protected readonly service: MarketplaceListingService) {
    super(service);
  }
}
