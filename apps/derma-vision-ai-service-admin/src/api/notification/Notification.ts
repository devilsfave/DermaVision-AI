import { User } from "../user/User";

export type Notification = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  message: string | null;
  user?: User | null;
};
