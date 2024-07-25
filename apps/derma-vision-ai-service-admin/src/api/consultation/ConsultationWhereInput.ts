import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AnalysisResultWhereUniqueInput } from "../analysisResult/AnalysisResultWhereUniqueInput";

export type ConsultationWhereInput = {
  id?: StringFilter;
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  analysisResult?: AnalysisResultWhereUniqueInput;
};
