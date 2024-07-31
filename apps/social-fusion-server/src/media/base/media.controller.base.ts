/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { MediaService } from "../media.service";
import { MediaCreateInput } from "./MediaCreateInput";
import { Media } from "./Media";
import { Post } from "../../post/base/Post";
import { MediaFindManyArgs } from "./MediaFindManyArgs";
import { MediaWhereUniqueInput } from "./MediaWhereUniqueInput";
import { MediaUpdateInput } from "./MediaUpdateInput";

export class MediaControllerBase {
  constructor(protected readonly service: MediaService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Media })
  async createMedia(@common.Body() data: MediaCreateInput): Promise<Media> {
    return await this.service.createMedia({
      data: data,
      select: {
        createdAt: true,
        id: true,
        tags: true,
        typeField: true,
        updatedAt: true,
        uploader: true,
        url: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Media] })
  @ApiNestedQuery(MediaFindManyArgs)
  async mediaItems(@common.Req() request: Request): Promise<Media[]> {
    const args = plainToClass(MediaFindManyArgs, request.query);
    return this.service.mediaItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        tags: true,
        typeField: true,
        updatedAt: true,
        uploader: true,
        url: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Media })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async media(
    @common.Param() params: MediaWhereUniqueInput
  ): Promise<Media | null> {
    const result = await this.service.media({
      where: params,
      select: {
        createdAt: true,
        id: true,
        tags: true,
        typeField: true,
        updatedAt: true,
        uploader: true,
        url: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Media })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMedia(
    @common.Param() params: MediaWhereUniqueInput,
    @common.Body() data: MediaUpdateInput
  ): Promise<Media | null> {
    try {
      return await this.service.updateMedia({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          tags: true,
          typeField: true,
          updatedAt: true,
          uploader: true,
          url: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Media })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMedia(
    @common.Param() params: MediaWhereUniqueInput
  ): Promise<Media | null> {
    try {
      return await this.service.deleteMedia({
        where: params,
        select: {
          createdAt: true,
          id: true,
          tags: true,
          typeField: true,
          updatedAt: true,
          uploader: true,
          url: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
