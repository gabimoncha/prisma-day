import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskWhereInput = {
  estimation?: StringNullableFilter;
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
