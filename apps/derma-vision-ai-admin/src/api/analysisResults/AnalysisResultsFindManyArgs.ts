import { AnalysisResultsWhereInput } from "./AnalysisResultsWhereInput";
import { AnalysisResultsOrderByInput } from "./AnalysisResultsOrderByInput";

export type AnalysisResultsFindManyArgs = {
  where?: AnalysisResultsWhereInput;
  orderBy?: Array<AnalysisResultsOrderByInput>;
  skip?: number;
  take?: number;
};
