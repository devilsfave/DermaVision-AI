import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { AnalysisResultListRelationFilter } from "../analysisResult/AnalysisResultListRelationFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { ReportListRelationFilter } from "../report/ReportListRelationFilter";
import { ConsultationListRelationFilter } from "../consultation/ConsultationListRelationFilter";
import { ImageListRelationFilter } from "../image/ImageListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  age?: IntNullableFilter;
  gender?: StringNullableFilter;
  name?: StringNullableFilter;
  skinType?: StringNullableFilter;
  analysisResults?: AnalysisResultListRelationFilter;
  notifications?: NotificationListRelationFilter;
  reports?: ReportListRelationFilter;
  consultations?: ConsultationListRelationFilter;
  images?: ImageListRelationFilter;
};
