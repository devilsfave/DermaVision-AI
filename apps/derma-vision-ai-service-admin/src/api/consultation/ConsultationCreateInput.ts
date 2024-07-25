import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AnalysisResultWhereUniqueInput } from "../analysisResult/AnalysisResultWhereUniqueInput";

export type ConsultationCreateInput = {
  date?: Date | null;
  description?: string | null;
  user?: UserWhereUniqueInput | null;
  analysisResult?: AnalysisResultWhereUniqueInput | null;
};
