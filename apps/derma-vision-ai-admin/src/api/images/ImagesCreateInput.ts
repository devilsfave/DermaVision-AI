import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AnalysisResultsCreateNestedManyWithoutImagesItemsInput } from "./AnalysisResultsCreateNestedManyWithoutImagesItemsInput";
import { GoogleGeminiResultsCreateNestedManyWithoutImagesItemsInput } from "./GoogleGeminiResultsCreateNestedManyWithoutImagesItemsInput";

export type ImagesCreateInput = {
  imageUrl?: string | null;
  analysisStatus?: "Option1" | null;
  uploadedAt?: Date | null;
  user?: UserWhereUniqueInput | null;
  analysisResultsItems?: AnalysisResultsCreateNestedManyWithoutImagesItemsInput;
  googleGeminiResultsItems?: GoogleGeminiResultsCreateNestedManyWithoutImagesItemsInput;
};
