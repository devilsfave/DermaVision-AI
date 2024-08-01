import { InputJsonValue } from "../../types";
import { ImagesWhereUniqueInput } from "../images/ImagesWhereUniqueInput";

export type GoogleGeminiResultsCreateInput = {
  geminiResult?: InputJsonValue;
  image?: ImagesWhereUniqueInput | null;
};
