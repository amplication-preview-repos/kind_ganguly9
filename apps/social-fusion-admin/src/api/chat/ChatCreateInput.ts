import { InputJsonValue } from "../../types";

export type ChatCreateInput = {
  lastMessage?: InputJsonValue;
  messages?: InputJsonValue;
  participants?: InputJsonValue;
};
