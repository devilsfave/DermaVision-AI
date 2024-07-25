import { InputJsonValue } from "../../types";
import { AnalysisResultUpdateManyWithoutUsersInput } from "./AnalysisResultUpdateManyWithoutUsersInput";
import { NotificationUpdateManyWithoutUsersInput } from "./NotificationUpdateManyWithoutUsersInput";
import { ReportUpdateManyWithoutUsersInput } from "./ReportUpdateManyWithoutUsersInput";
import { ConsultationUpdateManyWithoutUsersInput } from "./ConsultationUpdateManyWithoutUsersInput";
import { ImageUpdateManyWithoutUsersInput } from "./ImageUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  age?: number | null;
  gender?: string | null;
  name?: string | null;
  skinType?: string | null;
  analysisResults?: AnalysisResultUpdateManyWithoutUsersInput;
  notifications?: NotificationUpdateManyWithoutUsersInput;
  reports?: ReportUpdateManyWithoutUsersInput;
  consultations?: ConsultationUpdateManyWithoutUsersInput;
  images?: ImageUpdateManyWithoutUsersInput;
};
