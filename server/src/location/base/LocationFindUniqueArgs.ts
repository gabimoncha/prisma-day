import { ArgsType, Field } from "@nestjs/graphql";
import { LocationWhereUniqueInput } from "./LocationWhereUniqueInput";

@ArgsType()
class LocationFindUniqueArgs {
  @Field(() => LocationWhereUniqueInput, { nullable: false })
  where!: LocationWhereUniqueInput;
}

export { LocationFindUniqueArgs };
