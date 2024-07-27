import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ConsultationsService } from "./consultations.service";
import { ConsultationsControllerBase } from "./base/consultations.controller.base";

@swagger.ApiTags("consultations")
@common.Controller("consultations")
export class ConsultationsController extends ConsultationsControllerBase {
  constructor(
    protected readonly service: ConsultationsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
