/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MarketplaceListingWhereUniqueInput } from "./MarketplaceListingWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MarketplaceListingUpdateInput } from "./MarketplaceListingUpdateInput";

@ArgsType()
class UpdateMarketplaceListingArgs {
  @ApiProperty({
    required: true,
    type: () => MarketplaceListingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MarketplaceListingWhereUniqueInput)
  @Field(() => MarketplaceListingWhereUniqueInput, { nullable: false })
  where!: MarketplaceListingWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MarketplaceListingUpdateInput,
  })
  @ValidateNested()
  @Type(() => MarketplaceListingUpdateInput)
  @Field(() => MarketplaceListingUpdateInput, { nullable: false })
  data!: MarketplaceListingUpdateInput;
}

export { UpdateMarketplaceListingArgs as UpdateMarketplaceListingArgs };
