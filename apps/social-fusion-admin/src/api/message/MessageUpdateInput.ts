import { InputJsonValue } from "../../types";

export type MessageUpdateInput = {
  content?: string | null;
  readReceipts?: InputJsonValue;
  sender?: InputJsonValue;
  timestamp?: Date | null;
};
