import { InputJsonValue } from "../../types";

export type EventCreateInput = {
  date?: Date | null;
  description?: string | null;
  location?: string | null;
  reminders?: InputJsonValue;
  rsvps?: InputJsonValue;
  title?: string | null;
};
