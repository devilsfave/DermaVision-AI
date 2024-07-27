import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HomeRemediesService } from "./homeRemedies.service";
import { HomeRemediesControllerBase } from "./base/homeRemedies.controller.base";

@swagger.ApiTags("homeRemedies")
@common.Controller("homeRemedies")
export class HomeRemediesController extends HomeRemediesControllerBase {
  constructor(
    protected readonly service: HomeRemediesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
