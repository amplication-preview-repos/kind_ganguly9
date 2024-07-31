import { JsonValue } from "type-fest";

export type Group = {
  createdAt: Date;
  description: string | null;
  id: string;
  members: JsonValue;
  name: string | null;
  privacySettings: JsonValue;
  updatedAt: Date;
};
