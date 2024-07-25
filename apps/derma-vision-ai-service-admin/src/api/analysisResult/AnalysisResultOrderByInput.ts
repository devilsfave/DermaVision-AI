import { SortOrder } from "../../util/SortOrder";

export type AnalysisResultOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  result?: SortOrder;
  imageId?: SortOrder;
  userId?: SortOrder;
};