import { Module } from "@nestjs/common";
import { NewsFeedModuleBase } from "./base/newsFeed.module.base";
import { NewsFeedService } from "./newsFeed.service";
import { NewsFeedController } from "./newsFeed.controller";
import { NewsFeedResolver } from "./newsFeed.resolver";

@Module({
  imports: [NewsFeedModuleBase],
  controllers: [NewsFeedController],
  providers: [NewsFeedService, NewsFeedResolver],
  exports: [NewsFeedService],
})
export class NewsFeedModule {}
