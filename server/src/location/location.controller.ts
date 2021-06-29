import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LocationService } from "./location.service";
import { LocationControllerBase } from "./base/location.controller.base";

@swagger.ApiBasicAuth()
@swagger.ApiTags("locations")
@common.Controller("locations")
export class LocationController extends LocationControllerBase {
  constructor(
    protected readonly service: LocationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
