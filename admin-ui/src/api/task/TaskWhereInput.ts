import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskWhereInput = {
  estimation?: StringNullableFilter;
  id?: StringFilter;
  location?: LocationWhereUniqueInput;
  project?: ProjectWhereUniqueInput;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
