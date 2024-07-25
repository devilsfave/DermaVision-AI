import { Image as TImage } from "../api/image/Image";

export const IMAGE_TITLE_FIELD = "imagePath";

export const ImageTitle = (record: TImage): string => {
  return record.imagePath?.toString() || String(record.id);
};
