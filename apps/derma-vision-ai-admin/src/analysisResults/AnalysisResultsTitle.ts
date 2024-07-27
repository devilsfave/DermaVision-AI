import { AnalysisResults as TAnalysisResults } from "../api/analysisResults/AnalysisResults";

export const ANALYSISRESULTS_TITLE_FIELD = "id";

export const AnalysisResultsTitle = (record: TAnalysisResults): string => {
  return record.id?.toString() || String(record.id);
};
