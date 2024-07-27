import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ConsultationsWhereInput = {
  id?: StringFilter;
  dateTime?: DateTimeNullableFilter;
  status?: "Option1";
  notes?: StringNullableFilter;
  patient?: StringNullableFilter;
  doctor?: StringNullableFilter;
  facility?: StringNullableFilter;
  doctorName?: StringNullableFilter;
  contactInfo?: StringNullableFilter;
};
