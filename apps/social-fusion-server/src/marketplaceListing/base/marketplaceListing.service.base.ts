/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  MarketplaceListing as PrismaMarketplaceListing,
} from "@prisma/client";

export class MarketplaceListingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.MarketplaceListingCountArgs, "select">
  ): Promise<number> {
    return this.prisma.marketplaceListing.count(args);
  }

  async marketplaceListings(
    args: Prisma.MarketplaceListingFindManyArgs
  ): Promise<PrismaMarketplaceListing[]> {
    return this.prisma.marketplaceListing.findMany(args);
  }
  async marketplaceListing(
    args: Prisma.MarketplaceListingFindUniqueArgs
  ): Promise<PrismaMarketplaceListing | null> {
    return this.prisma.marketplaceListing.findUnique(args);
  }
  async createMarketplaceListing(
    args: Prisma.MarketplaceListingCreateArgs
  ): Promise<PrismaMarketplaceListing> {
    return this.prisma.marketplaceListing.create(args);
  }
  async updateMarketplaceListing(
    args: Prisma.MarketplaceListingUpdateArgs
  ): Promise<PrismaMarketplaceListing> {
    return this.prisma.marketplaceListing.update(args);
  }
  async deleteMarketplaceListing(
    args: Prisma.MarketplaceListingDeleteArgs
  ): Promise<PrismaMarketplaceListing> {
    return this.prisma.marketplaceListing.delete(args);
  }
}