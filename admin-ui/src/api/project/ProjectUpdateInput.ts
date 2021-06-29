import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectUpdateInput = {
  description?: string | null;
  dueDate?: Date | null;
  name?: string | null;
  startDate?: Date | null;
  user?: UserWhereUniqueInput;
};
