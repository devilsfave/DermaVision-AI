import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ImagesWhereUniqueInput } from "../images/ImagesWhereUniqueInput";

export type AnalysisResultsWhereInput = {
  id?: StringFilter;
  result?: JsonFilter;
  image?: ImagesWhereUniqueInput;
};
