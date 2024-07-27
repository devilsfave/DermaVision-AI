import { Images as TImages } from "../api/images/Images";

export const IMAGES_TITLE_FIELD = "imageUrl";

export const ImagesTitle = (record: TImages): string => {
  return record.imageUrl?.toString() || String(record.id);
};
