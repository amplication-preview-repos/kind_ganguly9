import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const MarketplaceListingCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <div />
        <div />
        <NumberInput label="price" source="price" />
        <div />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
