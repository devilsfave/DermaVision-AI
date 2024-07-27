import { GoogleGeminiResults as TGoogleGeminiResults } from "../api/googleGeminiResults/GoogleGeminiResults";

export const GOOGLEGEMINIRESULTS_TITLE_FIELD = "id";

export const GoogleGeminiResultsTitle = (
  record: TGoogleGeminiResults
): string => {
  return record.id?.toString() || String(record.id);
};
