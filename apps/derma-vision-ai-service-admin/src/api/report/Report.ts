import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Report = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: JsonValue;
  user?: User | null;
};
