import { InputJsonValue } from "../../types";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ConsultationUpdateManyWithoutAnalysisResultsInput } from "./ConsultationUpdateManyWithoutAnalysisResultsInput";
import { ImageUpdateManyWithoutAnalysisResultsInput } from "./ImageUpdateManyWithoutAnalysisResultsInput";

export type AnalysisResultUpdateInput = {
  result?: InputJsonValue;
  image?: ImageWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
  consultations?: ConsultationUpdateManyWithoutAnalysisResultsInput;
  images?: ImageUpdateManyWithoutAnalysisResultsInput;
};
