import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const StoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <DateTimeInput label="expiryTime" source="expiryTime" />
        <div />
        <div />
        <TextInput label="text" multiline source="text" />
        <div />
      </SimpleForm>
    </Create>
  );
};
