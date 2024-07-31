import { InputJsonValue } from "../../types";

export type ChatUpdateInput = {
  lastMessage?: InputJsonValue;
  messages?: InputJsonValue;
  participants?: InputJsonValue;
};
