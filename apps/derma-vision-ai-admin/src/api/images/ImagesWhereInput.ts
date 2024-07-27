import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AnalysisResultsListRelationFilter } from "../analysisResults/AnalysisResultsListRelationFilter";
import { GoogleGeminiResultsListRelationFilter } from "../googleGeminiResults/GoogleGeminiResultsListRelationFilter";

export type ImagesWhereInput = {
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  analysisStatus?: "Option1";
  uploadedAt?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
  analysisResultsItems?: AnalysisResultsListRelationFilter;
  googleGeminiResultsItems?: GoogleGeminiResultsListRelationFilter;
};
