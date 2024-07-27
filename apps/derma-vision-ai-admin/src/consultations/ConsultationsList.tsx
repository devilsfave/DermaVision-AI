import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ConsultationsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ConsultationsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="dateTime" source="dateTime" />
        <TextField label="status" source="status" />
        <TextField label="notes" source="notes" />
        <TextField label="patient" source="patient" />
        <TextField label="doctor" source="doctor" />
        <TextField label="facility" source="facility" />
        <TextField label="doctorName" source="doctorName" />
        <TextField label="contactInfo" source="contactInfo" />
      </Datagrid>
    </List>
  );
};
