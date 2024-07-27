import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ImagesListRelationFilter } from "../images/ImagesListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  role?: "Option1";
  imagesItems?: ImagesListRelationFilter;
  userRole?: "Option1";
};
