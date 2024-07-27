import { Consultations as TConsultations } from "../api/consultations/Consultations";

export const CONSULTATIONS_TITLE_FIELD = "doctorName";

export const ConsultationsTitle = (record: TConsultations): string => {
  return record.doctorName?.toString() || String(record.id);
};
