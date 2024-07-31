import { JsonValue } from "type-fest";

export type Event = {
  createdAt: Date;
  date: Date | null;
  description: string | null;
  id: string;
  location: string | null;
  reminders: JsonValue;
  rsvps: JsonValue;
  title: string | null;
  updatedAt: Date;
};
