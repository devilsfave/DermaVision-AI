import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ConsultationsModuleBase } from "./base/consultations.module.base";
import { ConsultationsService } from "./consultations.service";
import { ConsultationsController } from "./consultations.controller";
import { ConsultationsResolver } from "./consultations.resolver";

@Module({
  imports: [ConsultationsModuleBase, forwardRef(() => AuthModule)],
  controllers: [ConsultationsController],
  providers: [ConsultationsService, ConsultationsResolver],
  exports: [ConsultationsService],
})
export class ConsultationsModule {}
