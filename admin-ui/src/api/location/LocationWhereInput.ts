import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LocationWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
