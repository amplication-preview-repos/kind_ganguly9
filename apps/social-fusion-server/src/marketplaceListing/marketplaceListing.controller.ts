import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MarketplaceListingService } from "./marketplaceListing.service";
import { MarketplaceListingControllerBase } from "./base/marketplaceListing.controller.base";

@swagger.ApiTags("marketplaceListings")
@common.Controller("marketplaceListings")
export class MarketplaceListingController extends MarketplaceListingControllerBase {
  constructor(protected readonly service: MarketplaceListingService) {
    super(service);
  }
}
