import { Module } from "@nestjs/common";
import { MarketplaceListingModuleBase } from "./base/marketplaceListing.module.base";
import { MarketplaceListingService } from "./marketplaceListing.service";
import { MarketplaceListingController } from "./marketplaceListing.controller";
import { MarketplaceListingResolver } from "./marketplaceListing.resolver";

@Module({
  imports: [MarketplaceListingModuleBase],
  controllers: [MarketplaceListingController],
  providers: [MarketplaceListingService, MarketplaceListingResolver],
  exports: [MarketplaceListingService],
})
export class MarketplaceListingModule {}
