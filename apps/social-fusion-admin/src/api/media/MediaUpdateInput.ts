import { InputJsonValue } from "../../types";

export type MediaUpdateInput = {
  tags?: InputJsonValue;
  typeField?: string | null;
  uploader?: InputJsonValue;
  url?: string | null;
};
