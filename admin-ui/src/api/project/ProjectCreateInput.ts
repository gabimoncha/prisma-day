import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectCreateInput = {
  description?: string | null;
  name?: string | null;
  startDate?: Date | null;
  user: UserWhereUniqueInput;
};
