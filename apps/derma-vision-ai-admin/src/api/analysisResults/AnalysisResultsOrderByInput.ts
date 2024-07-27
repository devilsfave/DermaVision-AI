import { SortOrder } from "../../util/SortOrder";

export type AnalysisResultsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  result?: SortOrder;
  imageId?: SortOrder;
};
