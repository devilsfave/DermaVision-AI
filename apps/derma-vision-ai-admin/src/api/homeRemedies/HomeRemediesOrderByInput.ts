import { SortOrder } from "../../util/SortOrder";

export type HomeRemediesOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  skinCondition?: SortOrder;
  remedyDetails?: SortOrder;
};
