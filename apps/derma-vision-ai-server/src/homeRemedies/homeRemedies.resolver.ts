import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HomeRemediesResolverBase } from "./base/homeRemedies.resolver.base";
import { HomeRemedies } from "./base/HomeRemedies";
import { HomeRemediesService } from "./homeRemedies.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HomeRemedies)
export class HomeRemediesResolver extends HomeRemediesResolverBase {
  constructor(
    protected readonly service: HomeRemediesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
