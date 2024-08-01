import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type HomeRemediesWhereInput = {
  id?: StringFilter;
  skinCondition?: StringNullableFilter;
  remedyDetails?: StringNullableFilter;
};
