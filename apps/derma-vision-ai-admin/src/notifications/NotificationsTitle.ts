import { Notifications as TNotifications } from "../api/notifications/Notifications";

export const NOTIFICATIONS_TITLE_FIELD = "id";

export const NotificationsTitle = (record: TNotifications): string => {
  return record.id?.toString() || String(record.id);
};
