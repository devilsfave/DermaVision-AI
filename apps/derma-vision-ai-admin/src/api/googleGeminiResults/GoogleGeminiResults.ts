import { JsonValue } from "type-fest";
import { Images } from "../images/Images";

export type GoogleGeminiResults = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  geminiResult: JsonValue;
  image?: Images | null;
};
