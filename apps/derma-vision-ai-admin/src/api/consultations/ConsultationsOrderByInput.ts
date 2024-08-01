import { SortOrder } from "../../util/SortOrder";

export type ConsultationsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  dateTime?: SortOrder;
  status?: SortOrder;
  notes?: SortOrder;
  patient?: SortOrder;
  doctor?: SortOrder;
  facility?: SortOrder;
  doctorName?: SortOrder;
  contactInfo?: SortOrder;
};
