import { SortOrder } from "../../util/SortOrder";

export type ImagesOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  imageUrl?: SortOrder;
  analysisStatus?: SortOrder;
  uploadedAt?: SortOrder;
  userId?: SortOrder;
};
