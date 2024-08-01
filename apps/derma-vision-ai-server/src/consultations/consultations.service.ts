import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConsultationsServiceBase } from "./base/consultations.service.base";

@Injectable()
export class ConsultationsService extends ConsultationsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
