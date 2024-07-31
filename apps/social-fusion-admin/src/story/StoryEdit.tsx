import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const StoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <DateTimeInput label="expiryTime" source="expiryTime" />
        <div />
        <div />
        <TextInput label="text" multiline source="text" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
