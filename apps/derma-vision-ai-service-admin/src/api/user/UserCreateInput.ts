import { InputJsonValue } from "../../types";
import { AnalysisResultCreateNestedManyWithoutUsersInput } from "./AnalysisResultCreateNestedManyWithoutUsersInput";
import { NotificationCreateNestedManyWithoutUsersInput } from "./NotificationCreateNestedManyWithoutUsersInput";
import { ReportCreateNestedManyWithoutUsersInput } from "./ReportCreateNestedManyWithoutUsersInput";
import { ConsultationCreateNestedManyWithoutUsersInput } from "./ConsultationCreateNestedManyWithoutUsersInput";
import { ImageCreateNestedManyWithoutUsersInput } from "./ImageCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  age?: number | null;
  gender?: string | null;
  name?: string | null;
  skinType?: string | null;
  analysisResults?: AnalysisResultCreateNestedManyWithoutUsersInput;
  notifications?: NotificationCreateNestedManyWithoutUsersInput;
  reports?: ReportCreateNestedManyWithoutUsersInput;
  consultations?: ConsultationCreateNestedManyWithoutUsersInput;
  images?: ImageCreateNestedManyWithoutUsersInput;
};
