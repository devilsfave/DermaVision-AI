import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnalysisResultsServiceBase } from "./base/analysisResults.service.base";

@Injectable()
export class AnalysisResultsService extends AnalysisResultsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
