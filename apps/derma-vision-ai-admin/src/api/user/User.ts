import { JsonValue } from "type-fest";
import { Images } from "../images/Images";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  role?: "Option1" | null;
  imagesItems?: Array<Images>;
  userRole?: "Option1" | null;
};
