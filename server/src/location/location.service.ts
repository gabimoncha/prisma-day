import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { LocationServiceBase } from "./base/location.service.base";

@Injectable()
export class LocationService extends LocationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
