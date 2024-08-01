import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AnalysisResultsUpdateManyWithoutImagesItemsInput } from "./AnalysisResultsUpdateManyWithoutImagesItemsInput";
import { GoogleGeminiResultsUpdateManyWithoutImagesItemsInput } from "./GoogleGeminiResultsUpdateManyWithoutImagesItemsInput";

export type ImagesUpdateInput = {
  imageUrl?: string | null;
  analysisStatus?: "Option1" | null;
  uploadedAt?: Date | null;
  user?: UserWhereUniqueInput | null;
  analysisResultsItems?: AnalysisResultsUpdateManyWithoutImagesItemsInput;
  googleGeminiResultsItems?: GoogleGeminiResultsUpdateManyWithoutImagesItemsInput;
};
