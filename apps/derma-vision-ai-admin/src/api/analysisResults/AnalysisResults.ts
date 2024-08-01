import { JsonValue } from "type-fest";
import { Images } from "../images/Images";

export type AnalysisResults = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  result: JsonValue;
  image?: Images | null;
};
