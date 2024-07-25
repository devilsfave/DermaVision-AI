import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReportCreateInput = {
  content?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
