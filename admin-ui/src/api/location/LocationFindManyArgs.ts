import { LocationWhereInput } from "./LocationWhereInput";
import { LocationOrderByInput } from "./LocationOrderByInput";

export type LocationFindManyArgs = {
  where?: LocationWhereInput;
  orderBy?: LocationOrderByInput;
  skip?: number;
  take?: number;
};
