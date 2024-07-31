import { InputJsonValue } from "../../types";

export type MediaCreateInput = {
  tags?: InputJsonValue;
  typeField?: string | null;
  uploader?: InputJsonValue;
  url?: string | null;
};
