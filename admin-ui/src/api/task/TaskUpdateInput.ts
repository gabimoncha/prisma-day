import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskUpdateInput = {
  estimation?: string | null;
  project?: ProjectWhereUniqueInput | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
