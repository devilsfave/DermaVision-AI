import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GoogleGeminiResultsServiceBase } from "./base/googleGeminiResults.service.base";

@Injectable()
export class GoogleGeminiResultsService extends GoogleGeminiResultsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
