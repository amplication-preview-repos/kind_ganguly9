import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MediaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="type" source="typeField" />
        <div />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
