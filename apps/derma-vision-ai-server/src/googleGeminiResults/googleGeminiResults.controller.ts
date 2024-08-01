import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GoogleGeminiResultsService } from "./googleGeminiResults.service";
import { GoogleGeminiResultsControllerBase } from "./base/googleGeminiResults.controller.base";

@swagger.ApiTags("googleGeminiResults")
@common.Controller("googleGeminiResults")
export class GoogleGeminiResultsController extends GoogleGeminiResultsControllerBase {
  constructor(
    protected readonly service: GoogleGeminiResultsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
