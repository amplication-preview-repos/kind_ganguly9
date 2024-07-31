import { InputJsonValue } from "../../types";

export type GroupCreateInput = {
  description?: string | null;
  members?: InputJsonValue;
  name?: string | null;
  privacySettings?: InputJsonValue;
};
