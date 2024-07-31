import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ChatList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Chats"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="lastMessage" source="lastMessage" />
        <TextField label="messages" source="messages" />
        <TextField label="participants" source="participants" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
