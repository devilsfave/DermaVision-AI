import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AnalysisResultsService } from "./analysisResults.service";
import { AnalysisResultsControllerBase } from "./base/analysisResults.controller.base";

@swagger.ApiTags("analysisResults")
@common.Controller("analysisResults")
export class AnalysisResultsController extends AnalysisResultsControllerBase {
  constructor(
    protected readonly service: AnalysisResultsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
