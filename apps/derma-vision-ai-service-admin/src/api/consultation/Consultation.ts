import { User } from "../user/User";
import { AnalysisResult } from "../analysisResult/AnalysisResult";

export type Consultation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date: Date | null;
  description: string | null;
  user?: User | null;
  analysisResult?: AnalysisResult | null;
};
