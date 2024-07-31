import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="link" source="link" />
        <div />
        <div />
        <TextInput label="text" multiline source="text" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
