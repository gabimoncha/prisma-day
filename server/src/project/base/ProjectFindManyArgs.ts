import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProjectWhereInput } from "./ProjectWhereInput";
import { Type } from "class-transformer";
import { ProjectOrderByInput } from "./ProjectOrderByInput";

@ArgsType()
class ProjectFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProjectWhereInput,
  })
  @Field(() => ProjectWhereInput, { nullable: true })
  @Type(() => ProjectWhereInput)
  where?: ProjectWhereInput;

  @ApiProperty({
    required: false,
    type: ProjectOrderByInput,
  })
  @Field(() => ProjectOrderByInput, { nullable: true })
  @Type(() => ProjectOrderByInput)
  orderBy?: ProjectOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ProjectFindManyArgs };
