import { InputJsonValue } from "../../types";
import { ImagesUpdateManyWithoutUsersInput } from "./ImagesUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  role?: "Option1" | null;
  imagesItems?: ImagesUpdateManyWithoutUsersInput;
  userRole?: "Option1" | null;
};
