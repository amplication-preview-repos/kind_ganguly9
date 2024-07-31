import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NewsFeedServiceBase } from "./base/newsFeed.service.base";

@Injectable()
export class NewsFeedService extends NewsFeedServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
