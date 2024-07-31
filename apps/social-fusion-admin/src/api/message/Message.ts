import { JsonValue } from "type-fest";

export type Message = {
  content: string | null;
  createdAt: Date;
  id: string;
  readReceipts: JsonValue;
  sender: JsonValue;
  timestamp: Date | null;
  updatedAt: Date;
};
