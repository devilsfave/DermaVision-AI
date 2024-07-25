import { InputJsonValue } from "../../types";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ConsultationCreateNestedManyWithoutAnalysisResultsInput } from "./ConsultationCreateNestedManyWithoutAnalysisResultsInput";
import { ImageCreateNestedManyWithoutAnalysisResultsInput } from "./ImageCreateNestedManyWithoutAnalysisResultsInput";

export type AnalysisResultCreateInput = {
  result?: InputJsonValue;
  image?: ImageWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
  consultations?: ConsultationCreateNestedManyWithoutAnalysisResultsInput;
  images?: ImageCreateNestedManyWithoutAnalysisResultsInput;
};
