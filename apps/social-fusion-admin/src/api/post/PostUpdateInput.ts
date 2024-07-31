import { InputJsonValue } from "../../types";

export type PostUpdateInput = {
  comments?: InputJsonValue;
  link?: string | null;
  photo?: InputJsonValue;
  reactions?: InputJsonValue;
  text?: string | null;
  video?: InputJsonValue;
};
