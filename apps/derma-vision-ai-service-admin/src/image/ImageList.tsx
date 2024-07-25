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
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { ANALYSISRESULT_TITLE_FIELD } from "../analysisResult/AnalysisResultTitle";

export const ImageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Images"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="imagePath" source="imagePath" />
        <TextField label="metadata" source="metadata" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="AnalysisResult"
          source="analysisresult.id"
          reference="AnalysisResult"
        >
          <TextField source={ANALYSISRESULT_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
