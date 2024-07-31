import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const UserProfileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="bio" source="bio" />
        <TextField label="coverPhoto" source="coverPhoto" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="friends" source="friends" />
        <TextField label="ID" source="id" />
        <TextField label="personalInformation" source="personalInformation" />
        <TextField label="privacySettings" source="privacySettings" />
        <TextField label="profilePicture" source="profilePicture" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
