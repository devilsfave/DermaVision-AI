import { ConsultationsWhereInput } from "./ConsultationsWhereInput";
import { ConsultationsOrderByInput } from "./ConsultationsOrderByInput";

export type ConsultationsFindManyArgs = {
  where?: ConsultationsWhereInput;
  orderBy?: Array<ConsultationsOrderByInput>;
  skip?: number;
  take?: number;
};
