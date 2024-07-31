import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const NewsFeedList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"NewsFeeds"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="comments" source="comments" />
        <TextField label="contentSuggestions" source="contentSuggestions" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="friendActivities" source="friendActivities" />
        <TextField label="ID" source="id" />
        <TextField label="likedPosts" source="likedPosts" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
