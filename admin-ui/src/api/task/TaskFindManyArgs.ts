import { TaskWhereInput } from "./TaskWhereInput";
import { TaskOrderByInput } from "./TaskOrderByInput";

export type TaskFindManyArgs = {
  where?: TaskWhereInput;
  orderBy?: TaskOrderByInput;
  skip?: number;
  take?: number;
};
