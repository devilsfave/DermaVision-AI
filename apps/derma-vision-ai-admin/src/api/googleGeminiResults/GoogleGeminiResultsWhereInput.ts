import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ImagesWhereUniqueInput } from "../images/ImagesWhereUniqueInput";

export type GoogleGeminiResultsWhereInput = {
  id?: StringFilter;
  geminiResult?: JsonFilter;
  image?: ImagesWhereUniqueInput;
};
