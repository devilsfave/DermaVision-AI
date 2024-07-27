import { GoogleGeminiResultsWhereInput } from "./GoogleGeminiResultsWhereInput";
import { GoogleGeminiResultsOrderByInput } from "./GoogleGeminiResultsOrderByInput";

export type GoogleGeminiResultsFindManyArgs = {
  where?: GoogleGeminiResultsWhereInput;
  orderBy?: Array<GoogleGeminiResultsOrderByInput>;
  skip?: number;
  take?: number;
};
