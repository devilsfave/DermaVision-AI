import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AnalysisResultsModuleBase } from "./base/analysisResults.module.base";
import { AnalysisResultsService } from "./analysisResults.service";
import { AnalysisResultsController } from "./analysisResults.controller";
import { AnalysisResultsResolver } from "./analysisResults.resolver";

@Module({
  imports: [AnalysisResultsModuleBase, forwardRef(() => AuthModule)],
  controllers: [AnalysisResultsController],
  providers: [AnalysisResultsService, AnalysisResultsResolver],
  exports: [AnalysisResultsService],
})
export class AnalysisResultsModule {}
