import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { IMAGES_TITLE_FIELD } from "../images/ImagesTitle";

export const GoogleGeminiResultsList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"GoogleGeminiResultsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="geminiResult" source="geminiResult" />
        <ReferenceField label="image" source="images.id" reference="Images">
          <TextField source={IMAGES_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
