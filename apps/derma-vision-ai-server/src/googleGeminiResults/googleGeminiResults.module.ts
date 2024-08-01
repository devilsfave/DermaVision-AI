import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GoogleGeminiResultsModuleBase } from "./base/googleGeminiResults.module.base";
import { GoogleGeminiResultsService } from "./googleGeminiResults.service";
import { GoogleGeminiResultsController } from "./googleGeminiResults.controller";
import { GoogleGeminiResultsResolver } from "./googleGeminiResults.resolver";

@Module({
  imports: [GoogleGeminiResultsModuleBase, forwardRef(() => AuthModule)],
  controllers: [GoogleGeminiResultsController],
  providers: [GoogleGeminiResultsService, GoogleGeminiResultsResolver],
  exports: [GoogleGeminiResultsService],
})
export class GoogleGeminiResultsModule {}
