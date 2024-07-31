import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NewsFeedService } from "./newsFeed.service";
import { NewsFeedControllerBase } from "./base/newsFeed.controller.base";

@swagger.ApiTags("newsFeeds")
@common.Controller("newsFeeds")
export class NewsFeedController extends NewsFeedControllerBase {
  constructor(protected readonly service: NewsFeedService) {
    super(service);
  }
}
