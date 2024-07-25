import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReportWhereInput = {
  id?: StringFilter;
  content?: JsonFilter;
  user?: UserWhereUniqueInput;
};
