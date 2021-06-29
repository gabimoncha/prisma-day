import { Task } from "../task/Task";
import { User } from "../user/User";

export type Project = {
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  id: string;
  name: string | null;
  startDate: Date | null;
  tasks?: Array<Task>;
  updatedAt: Date;
  user?: User;
};
