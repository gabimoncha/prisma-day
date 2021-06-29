import { ArgsType, Field } from "@nestjs/graphql";
import { LocationWhereUniqueInput } from "./LocationWhereUniqueInput";
import { LocationUpdateInput } from "./LocationUpdateInput";

@ArgsType()
class UpdateLocationArgs {
  @Field(() => LocationWhereUniqueInput, { nullable: false })
  where!: LocationWhereUniqueInput;
  @Field(() => LocationUpdateInput, { nullable: false })
  data!: LocationUpdateInput;
}

export { UpdateLocationArgs };
