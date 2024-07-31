import { InputJsonValue } from "../../types";

export type GroupUpdateInput = {
  description?: string | null;
  members?: InputJsonValue;
  name?: string | null;
  privacySettings?: InputJsonValue;
};
