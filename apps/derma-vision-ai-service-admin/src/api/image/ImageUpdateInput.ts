import { InputJsonValue } from "../../types";
import { AnalysisResultUpdateManyWithoutImagesInput } from "./AnalysisResultUpdateManyWithoutImagesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AnalysisResultWhereUniqueInput } from "../analysisResult/AnalysisResultWhereUniqueInput";

export type ImageUpdateInput = {
  imagePath?: string | null;
  metadata?: InputJsonValue;
  analysisResults?: AnalysisResultUpdateManyWithoutImagesInput;
  user?: UserWhereUniqueInput | null;
  analysisResult?: AnalysisResultWhereUniqueInput | null;
};
