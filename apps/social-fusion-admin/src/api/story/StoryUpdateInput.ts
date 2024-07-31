import { InputJsonValue } from "../../types";

export type StoryUpdateInput = {
  comments?: InputJsonValue;
  expiryTime?: Date | null;
  photo?: InputJsonValue;
  reactions?: InputJsonValue;
  text?: string | null;
  video?: InputJsonValue;
};
