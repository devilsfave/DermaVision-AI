import { InputJsonValue } from "../../types";
import { ImagesWhereUniqueInput } from "../images/ImagesWhereUniqueInput";

export type GoogleGeminiResultsUpdateInput = {
  geminiResult?: InputJsonValue;
  image?: ImagesWhereUniqueInput | null;
};
