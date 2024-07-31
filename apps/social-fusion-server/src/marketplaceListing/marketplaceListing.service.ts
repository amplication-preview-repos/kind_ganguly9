import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MarketplaceListingServiceBase } from "./base/marketplaceListing.service.base";

@Injectable()
export class MarketplaceListingService extends MarketplaceListingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
