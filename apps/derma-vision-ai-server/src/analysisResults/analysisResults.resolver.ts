import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AnalysisResultsResolverBase } from "./base/analysisResults.resolver.base";
import { AnalysisResults } from "./base/AnalysisResults";
import { AnalysisResultsService } from "./analysisResults.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AnalysisResults)
export class AnalysisResultsResolver extends AnalysisResultsResolverBase {
  constructor(
    protected readonly service: AnalysisResultsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
