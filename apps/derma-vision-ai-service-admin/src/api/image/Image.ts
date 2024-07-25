import { JsonValue } from "type-fest";
import { AnalysisResult } from "../analysisResult/AnalysisResult";
import { User } from "../user/User";

export type Image = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  imagePath: string | null;
  metadata: JsonValue;
  analysisResults?: Array<AnalysisResult>;
  user?: User | null;
  analysisResult?: AnalysisResult | null;
};
