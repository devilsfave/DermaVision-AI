/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AnalysisResults } from "./AnalysisResults";
import { AnalysisResultsCountArgs } from "./AnalysisResultsCountArgs";
import { AnalysisResultsFindManyArgs } from "./AnalysisResultsFindManyArgs";
import { AnalysisResultsFindUniqueArgs } from "./AnalysisResultsFindUniqueArgs";
import { CreateAnalysisResultsArgs } from "./CreateAnalysisResultsArgs";
import { UpdateAnalysisResultsArgs } from "./UpdateAnalysisResultsArgs";
import { DeleteAnalysisResultsArgs } from "./DeleteAnalysisResultsArgs";
import { Images } from "../../images/base/Images";
import { AnalysisResultsService } from "../analysisResults.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AnalysisResults)
export class AnalysisResultsResolverBase {
  constructor(
    protected readonly service: AnalysisResultsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "AnalysisResults",
    action: "read",
    possession: "any",
  })
  async _analysisResultsItemsMeta(
    @graphql.Args() args: AnalysisResultsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [AnalysisResults])
  @nestAccessControl.UseRoles({
    resource: "AnalysisResults",
    action: "read",
    possession: "any",
  })
  async analysisResultsItems(
    @graphql.Args() args: AnalysisResultsFindManyArgs
  ): Promise<AnalysisResults[]> {
    return this.service.analysisResultsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => AnalysisResults, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "AnalysisResults",
    action: "read",
    possession: "own",
  })
  async analysisResults(
    @graphql.Args() args: AnalysisResultsFindUniqueArgs
  ): Promise<AnalysisResults | null> {
    const result = await this.service.analysisResults(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AnalysisResults)
  @nestAccessControl.UseRoles({
    resource: "AnalysisResults",
    action: "create",
    possession: "any",
  })
  async createAnalysisResults(
    @graphql.Args() args: CreateAnalysisResultsArgs
  ): Promise<AnalysisResults> {
    return await this.service.createAnalysisResults({
      ...args,
      data: {
        ...args.data,

        image: args.data.image
          ? {
              connect: args.data.image,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AnalysisResults)
  @nestAccessControl.UseRoles({
    resource: "AnalysisResults",
    action: "update",
    possession: "any",
  })
  async updateAnalysisResults(
    @graphql.Args() args: UpdateAnalysisResultsArgs
  ): Promise<AnalysisResults | null> {
    try {
      return await this.service.updateAnalysisResults({
        ...args,
        data: {
          ...args.data,

          image: args.data.image
            ? {
                connect: args.data.image,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => AnalysisResults)
  @nestAccessControl.UseRoles({
    resource: "AnalysisResults",
    action: "delete",
    possession: "any",
  })
  async deleteAnalysisResults(
    @graphql.Args() args: DeleteAnalysisResultsArgs
  ): Promise<AnalysisResults | null> {
    try {
      return await this.service.deleteAnalysisResults(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Images, {
    nullable: true,
    name: "image",
  })
  @nestAccessControl.UseRoles({
    resource: "Images",
    action: "read",
    possession: "any",
  })
  async getImage(
    @graphql.Parent() parent: AnalysisResults
  ): Promise<Images | null> {
    const result = await this.service.getImage(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
