export type Consultations = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  dateTime: Date | null;
  status?: "Option1" | null;
  notes: string | null;
  patient: string | null;
  doctor: string | null;
  facility: string | null;
  doctorName: string | null;
  contactInfo: string | null;
};
