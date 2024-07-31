import { JsonValue } from "type-fest";

export type Media = {
  createdAt: Date;
  id: string;
  tags: JsonValue;
  typeField: string | null;
  updatedAt: Date;
  uploader: JsonValue;
  url: string | null;
};
