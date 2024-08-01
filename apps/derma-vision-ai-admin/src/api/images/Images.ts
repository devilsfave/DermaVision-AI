import { User } from "../user/User";
import { AnalysisResults } from "../analysisResults/AnalysisResults";
import { GoogleGeminiResults } from "../googleGeminiResults/GoogleGeminiResults";

export type Images = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  imageUrl: string | null;
  analysisStatus?: "Option1" | null;
  uploadedAt: Date | null;
  user?: User | null;
  analysisResultsItems?: Array<AnalysisResults>;
  googleGeminiResultsItems?: Array<GoogleGeminiResults>;
};
