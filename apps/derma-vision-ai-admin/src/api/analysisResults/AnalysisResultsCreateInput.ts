import { InputJsonValue } from "../../types";
import { ImagesWhereUniqueInput } from "../images/ImagesWhereUniqueInput";

export type AnalysisResultsCreateInput = {
  result?: InputJsonValue;
  image?: ImagesWhereUniqueInput | null;
};
