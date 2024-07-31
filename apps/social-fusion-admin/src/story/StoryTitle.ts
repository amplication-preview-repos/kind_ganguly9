import { Story as TStory } from "../api/story/Story";

export const STORY_TITLE_FIELD = "id";

export const StoryTitle = (record: TStory): string => {
  return record.id?.toString() || String(record.id);
};
