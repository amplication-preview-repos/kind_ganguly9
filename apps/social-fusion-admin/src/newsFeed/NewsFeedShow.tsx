import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const NewsFeedShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="comments" source="comments" />
        <TextField label="contentSuggestions" source="contentSuggestions" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="friendActivities" source="friendActivities" />
        <TextField label="ID" source="id" />
        <TextField label="likedPosts" source="likedPosts" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
