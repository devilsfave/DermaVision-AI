import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
