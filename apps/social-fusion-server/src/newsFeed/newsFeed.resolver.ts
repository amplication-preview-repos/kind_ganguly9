import * as graphql from "@nestjs/graphql";
import { NewsFeedResolverBase } from "./base/newsFeed.resolver.base";
import { NewsFeed } from "./base/NewsFeed";
import { NewsFeedService } from "./newsFeed.service";

@graphql.Resolver(() => NewsFeed)
export class NewsFeedResolver extends NewsFeedResolverBase {
  constructor(protected readonly service: NewsFeedService) {
    super(service);
  }
}
