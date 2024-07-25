import { SortOrder } from "../../util/SortOrder";

export type ConsultationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  userId?: SortOrder;
  analysisResultId?: SortOrder;
};
