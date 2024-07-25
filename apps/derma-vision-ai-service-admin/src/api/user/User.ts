import { JsonValue } from "type-fest";
import { AnalysisResult } from "../analysisResult/AnalysisResult";
import { Notification } from "../notification/Notification";
import { Report } from "../report/Report";
import { Consultation } from "../consultation/Consultation";
import { Image } from "../image/Image";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  age: number | null;
  gender: string | null;
  name: string | null;
  skinType: string | null;
  analysisResults?: Array<AnalysisResult>;
  notifications?: Array<Notification>;
  reports?: Array<Report>;
  consultations?: Array<Consultation>;
  images?: Array<Image>;
};
