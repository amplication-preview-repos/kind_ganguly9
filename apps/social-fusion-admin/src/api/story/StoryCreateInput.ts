import { InputJsonValue } from "../../types";

export type StoryCreateInput = {
  comments?: InputJsonValue;
  expiryTime?: Date | null;
  photo?: InputJsonValue;
  reactions?: InputJsonValue;
  text?: string | null;
  video?: InputJsonValue;
};
