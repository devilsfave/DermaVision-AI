import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GoogleGeminiResultsResolverBase } from "./base/googleGeminiResults.resolver.base";
import { GoogleGeminiResults } from "./base/GoogleGeminiResults";
import { GoogleGeminiResultsService } from "./googleGeminiResults.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GoogleGeminiResults)
export class GoogleGeminiResultsResolver extends GoogleGeminiResultsResolverBase {
  constructor(
    protected readonly service: GoogleGeminiResultsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
