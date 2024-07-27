import { HomeRemedies as THomeRemedies } from "../api/homeRemedies/HomeRemedies";

export const HOMEREMEDIES_TITLE_FIELD = "skinCondition";

export const HomeRemediesTitle = (record: THomeRemedies): string => {
  return record.skinCondition?.toString() || String(record.id);
};
