import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { AnalysisResultListRelationFilter } from "../analysisResult/AnalysisResultListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AnalysisResultWhereUniqueInput } from "../analysisResult/AnalysisResultWhereUniqueInput";

export type ImageWhereInput = {
  id?: StringFilter;
  imagePath?: StringNullableFilter;
  metadata?: JsonFilter;
  analysisResults?: AnalysisResultListRelationFilter;
  user?: UserWhereUniqueInput;
  analysisResult?: AnalysisResultWhereUniqueInput;
};
