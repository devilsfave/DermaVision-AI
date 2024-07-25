import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ConsultationListRelationFilter } from "../consultation/ConsultationListRelationFilter";
import { ImageListRelationFilter } from "../image/ImageListRelationFilter";

export type AnalysisResultWhereInput = {
  id?: StringFilter;
  result?: JsonFilter;
  image?: ImageWhereUniqueInput;
  user?: UserWhereUniqueInput;
  consultations?: ConsultationListRelationFilter;
  images?: ImageListRelationFilter;
};
