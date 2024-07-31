import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="link" source="link" />
        <div />
        <div />
        <TextInput label="text" multiline source="text" />
        <div />
      </SimpleForm>
    </Create>
  );
};
