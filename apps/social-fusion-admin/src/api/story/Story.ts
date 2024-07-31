import { JsonValue } from "type-fest";

export type Story = {
  comments: JsonValue;
  createdAt: Date;
  expiryTime: Date | null;
  id: string;
  photo: JsonValue;
  reactions: JsonValue;
  text: string | null;
  updatedAt: Date;
  video: JsonValue;
};
