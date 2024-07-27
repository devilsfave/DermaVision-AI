import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HomeRemediesModuleBase } from "./base/homeRemedies.module.base";
import { HomeRemediesService } from "./homeRemedies.service";
import { HomeRemediesController } from "./homeRemedies.controller";
import { HomeRemediesResolver } from "./homeRemedies.resolver";

@Module({
  imports: [HomeRemediesModuleBase, forwardRef(() => AuthModule)],
  controllers: [HomeRemediesController],
  providers: [HomeRemediesService, HomeRemediesResolver],
  exports: [HomeRemediesService],
})
export class HomeRemediesModule {}
