import { SortOrder } from "../../util/SortOrder";

export type ImageOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  imagePath?: SortOrder;
  metadata?: SortOrder;
  userId?: SortOrder;
  analysisResultId?: SortOrder;
};
