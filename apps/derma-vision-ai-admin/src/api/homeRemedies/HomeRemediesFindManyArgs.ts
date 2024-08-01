import { HomeRemediesWhereInput } from "./HomeRemediesWhereInput";
import { HomeRemediesOrderByInput } from "./HomeRemediesOrderByInput";

export type HomeRemediesFindManyArgs = {
  where?: HomeRemediesWhereInput;
  orderBy?: Array<HomeRemediesOrderByInput>;
  skip?: number;
  take?: number;
};
