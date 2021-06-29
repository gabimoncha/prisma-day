import { ArgsType, Field } from "@nestjs/graphql";
import { LocationWhereUniqueInput } from "./LocationWhereUniqueInput";

@ArgsType()
class DeleteLocationArgs {
  @Field(() => LocationWhereUniqueInput, { nullable: false })
  where!: LocationWhereUniqueInput;
}

export { DeleteLocationArgs };
