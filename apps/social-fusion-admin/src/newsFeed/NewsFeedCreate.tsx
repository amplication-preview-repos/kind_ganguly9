import * as React from "react";
import { Create, SimpleForm, CreateProps } from "react-admin";

export const NewsFeedCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <div />
        <div />
        <div />
      </SimpleForm>
    </Create>
  );
};
