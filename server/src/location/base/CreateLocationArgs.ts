import { ArgsType, Field } from "@nestjs/graphql";
import { LocationCreateInput } from "./LocationCreateInput";

@ArgsType()
class CreateLocationArgs {
  @Field(() => LocationCreateInput, { nullable: false })
  data!: LocationCreateInput;
}

export { CreateLocationArgs };
