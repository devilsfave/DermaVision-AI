import { InputJsonValue } from "../../types";
import { ImagesCreateNestedManyWithoutUsersInput } from "./ImagesCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  role?: "Option1" | null;
  imagesItems?: ImagesCreateNestedManyWithoutUsersInput;
  userRole?: "Option1" | null;
};
