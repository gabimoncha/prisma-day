import { Location } from "../location/Location";
import { Project } from "../project/Project";
import { User } from "../user/User";

export type Task = {
  createdAt: Date;
  estimation: string | null;
  id: string;
  location?: Location | null;
  project?: Project | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
