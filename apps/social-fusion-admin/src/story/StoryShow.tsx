import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const StoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="comments" source="comments" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="expiryTime" source="expiryTime" />
        <TextField label="ID" source="id" />
        <TextField label="photo" source="photo" />
        <TextField label="reactions" source="reactions" />
        <TextField label="text" source="text" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="video" source="video" />
      </SimpleShowLayout>
    </Show>
  );
};
