import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HomeRemediesServiceBase } from "./base/homeRemedies.service.base";

@Injectable()
export class HomeRemediesService extends HomeRemediesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
