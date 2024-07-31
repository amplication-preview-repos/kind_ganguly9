import { InputJsonValue } from "../../types";

export type MessageCreateInput = {
  content?: string | null;
  readReceipts?: InputJsonValue;
  sender?: InputJsonValue;
  timestamp?: Date | null;
};
