import { JsonValue } from "type-fest";
import { Image } from "../image/Image";
import { User } from "../user/User";
import { Consultation } from "../consultation/Consultation";

export type AnalysisResult = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  result: JsonValue;
  image?: Image | null;
  user?: User | null;
  consultations?: Array<Consultation>;
  images?: Array<Image>;
};
