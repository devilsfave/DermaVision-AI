import { InputJsonValue } from "../../types";
import { AnalysisResultCreateNestedManyWithoutImagesInput } from "./AnalysisResultCreateNestedManyWithoutImagesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AnalysisResultWhereUniqueInput } from "../analysisResult/AnalysisResultWhereUniqueInput";

export type ImageCreateInput = {
  imagePath?: string | null;
  metadata?: InputJsonValue;
  analysisResults?: AnalysisResultCreateNestedManyWithoutImagesInput;
  user?: UserWhereUniqueInput | null;
  analysisResult?: AnalysisResultWhereUniqueInput | null;
};
