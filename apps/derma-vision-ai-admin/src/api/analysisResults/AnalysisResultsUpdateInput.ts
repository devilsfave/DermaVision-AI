import { InputJsonValue } from "../../types";
import { ImagesWhereUniqueInput } from "../images/ImagesWhereUniqueInput";

export type AnalysisResultsUpdateInput = {
  result?: InputJsonValue;
  image?: ImagesWhereUniqueInput | null;
};
