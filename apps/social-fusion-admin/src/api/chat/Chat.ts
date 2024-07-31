import { JsonValue } from "type-fest";

export type Chat = {
  createdAt: Date;
  id: string;
  lastMessage: JsonValue;
  messages: JsonValue;
  participants: JsonValue;
  updatedAt: Date;
};
