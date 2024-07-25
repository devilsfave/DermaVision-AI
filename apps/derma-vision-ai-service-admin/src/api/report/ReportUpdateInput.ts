import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReportUpdateInput = {
  content?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
