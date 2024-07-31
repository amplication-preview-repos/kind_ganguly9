import { JsonValue } from "type-fest";

export type Post = {
  comments: JsonValue;
  createdAt: Date;
  id: string;
  link: string | null;
  photo: JsonValue;
  reactions: JsonValue;
  text: string | null;
  updatedAt: Date;
  video: JsonValue;
};
