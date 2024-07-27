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
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { AnalysisResultsService } from "../analysisResults.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AnalysisResultsCreateInput } from "./AnalysisResultsCreateInput";
import { AnalysisResults } from "./AnalysisResults";
import { AnalysisResultsFindManyArgs } from "./AnalysisResultsFindManyArgs";
import { AnalysisResultsWhereUniqueInput } from "./AnalysisResultsWhereUniqueInput";
import { AnalysisResultsUpdateInput } from "./AnalysisResultsUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AnalysisResultsControllerBase {
  constructor(
    protected readonly service: AnalysisResultsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AnalysisResults })
  @nestAccessControl.UseRoles({
    resource: "AnalysisResults",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createAnalysisResults(
    @common.Body() data: AnalysisResultsCreateInput
  ): Promise<AnalysisResults> {
    return await this.service.createAnalysisResults({
      data: {
        ...data,

        image: data.image
          ? {
              connect: data.image,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        result: true,

        image: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [AnalysisResults] })
  @ApiNestedQuery(AnalysisResultsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "AnalysisResults",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async analysisResultsItems(
    @common.Req() request: Request
  ): Promise<AnalysisResults[]> {
    const args = plainToClass(AnalysisResultsFindManyArgs, request.query);
    return this.service.analysisResultsItems({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        result: true,

        image: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AnalysisResults })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AnalysisResults",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async analysisResults(
    @common.Param() params: AnalysisResultsWhereUniqueInput
  ): Promise<AnalysisResults | null> {
    const result = await this.service.analysisResults({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        result: true,

        image: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: AnalysisResults })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AnalysisResults",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateAnalysisResults(
    @common.Param() params: AnalysisResultsWhereUniqueInput,
    @common.Body() data: AnalysisResultsUpdateInput
  ): Promise<AnalysisResults | null> {
    try {
      return await this.service.updateAnalysisResults({
        where: params,
        data: {
          ...data,

          image: data.image
            ? {
                connect: data.image,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          result: true,

          image: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: AnalysisResults })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AnalysisResults",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAnalysisResults(
    @common.Param() params: AnalysisResultsWhereUniqueInput
  ): Promise<AnalysisResults | null> {
    try {
      return await this.service.deleteAnalysisResults({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          result: true,

          image: {
            select: {
              id: true,
            },
          },
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